import React, { useRef, useState } from "react";
import { SettingsList, SettingsListItem, Icon, ListItemText } from "./List";
import {
  Form,
  FormHeader,
  Label,
  Input,
  SubmitButton,
  ClearButton,
  ResultsContainer,
} from "./Form";
import { ErrorMessage } from "./Text";
import checkmark from "./images/checkmark.svg";
import Result from "./Result";

const TokenForm = () => {
  const roomInputRef = useRef();
  const usernameInputRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [tokenInfo, setTokenInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // null | string

  const submitTokenForm = (e) => {
    e.preventDefault();
    if (!roomInputRef?.current?.value || !usernameInputRef?.current?.value) {
      setErrorMessage(
        "Eep, something when wrong! We couldn't access the input values. :|"
      );
      return;
    }
    setSubmitting(true);

    const url = `https://admin-daily-webinar.netlify.app/api/meeting-tokens`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_DAILY_API_KEY}`,
      },
      mode: "no-cors",
      body: JSON.stringify({
        properties: {
          is_owner: true,
          user_name: !usernameInputRef?.current?.value,
          enable_screenshare: true,
          start_video_off: false,
          start_audio_off: false,
          room_name: !roomInputRef?.current?.value,
        },
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTokenInfo(json);
        setSubmitting(false);
        setErrorMessage(false);
      })
      .catch((err) => {
        setErrorMessage("That did not work! :'( Please try again.");
        setSubmitting(false);
      });
  };

  const clear = () => {
    setTokenInfo(null);
    roomInputRef.current.value = "";
    usernameInputRef.current.value = "";
  };

  return (
    <Form onSubmit={submitTokenForm}>
      <FormHeader>Create a new admin token for a specific room:</FormHeader>
      <SettingsList>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Makes you an owner</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Let's you set your webinar username</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Enables screen share option</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Your video and mic will be off by default</ListItemText>
        </SettingsListItem>
      </SettingsList>
      <Label htmlFor="roomName">
        Webinar room name (existing or from form above)
      </Label>
      <Input ref={roomInputRef} id="roomName" type="text" required />
      <Label htmlFor="userName">Admin's username</Label>
      <Input ref={usernameInputRef} id="userName" type="text" required />
      <SubmitButton type="submit" value="Create token" disabled={submitting} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {tokenInfo && (
        <ResultsContainer>
          <ClearButton onClick={clear}>Clear results</ClearButton>
          <Result
            column
            main
            label="Your admin token (add to end of webinar link):"
            value={`?t=${tokenInfo?.token}`}
            main
          />
          <ErrorMessage>
            This token is not saved anywhere. Please keep it somewhere safe!
          </ErrorMessage>
        </ResultsContainer>
      )}
    </Form>
  );
};

export default TokenForm;
