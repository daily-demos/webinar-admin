import React, { useRef, useState } from "react";
import { SettingsList, SettingsListItem, Icon, ListItemText } from "./List";
import { Form, FormHeader, Label, Input, SubmitButton } from "./Form";
import { ErrorMessage } from "./Text";
import checkmark from "./images/checkmark.svg";

const TokenForm = () => {
  const roomInputRef = useRef();
  const usernameInputRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // null | string

  const submitTokenForm = () => {
    if (!roomInputRef?.current?.value || !usernameInputRef?.current?.value) {
      setErrorMessage(
        "Eep, something when wrong! We couldn't access the input values. :|"
      );
    }
    const data = {
      properties: {
        is_owner: true,
        user_name: !usernameInputRef?.current?.value,
        enable_screenshare: true,
        start_video_off: false,
        start_audio_off: false,
        room_name: !roomInputRef?.current?.value,
      },
    };
    fetch(`${process.env.REACT_APP_BASE_URL}api/meeting-tokens`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={submitTokenForm}>
      <FormHeader>Create a new admin token for a specific room:</FormHeader>
      <SettingsList>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>
            Returns a link to the room with the token appended
          </ListItemText>
        </SettingsListItem>
      </SettingsList>
      <Label htmlFor="roomName">Room name</Label>
      <Input ref={roomInputRef} id="roomName" type="text" required />
      <Label htmlFor="userName">Username</Label>
      <Input ref={usernameInputRef} id="userName" type="text" required />
      <SubmitButton type="submit" value="Create token" disabled={submitting} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
};

export default TokenForm;
