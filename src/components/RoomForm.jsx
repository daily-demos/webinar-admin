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
import styled from "styled-components";

const RoomForm = () => {
  const roomInputRef = useRef();
  const privacyInputRef = useRef();
  const [submitting, setSubmitting] = useState();
  const [roomInfo, setRoomInfo] = useState();
  const [errorMessage, setErrorMessage] = useState(null); // null | string

  const submitRoomForm = async (e) => {
    e.preventDefault();
    if (!roomInputRef?.current?.value) {
      setErrorMessage(
        "Eep, something when wrong! We couldn't access the input value. :|"
      );
      return;
    }
    setSubmitting(true);
    const url = `https://admin-daily-webinar.netlify.app/api/rooms`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_DAILY_API_KEY}`,
      },
      mode: "no-cors",
      body: JSON.stringify({
        properties: {
          autojoin: true,
          start_video_off: true,
          start_audio_off: true,
          owner_only_broadcast: true,
          enable_recording: "local",
        },
        privacy: roomInputRef?.current?.checked ? "private" : "public",
        name: roomInputRef?.current?.value,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          setErrorMessage(`${json.error}: ${json.info}`);
        } else {
          setRoomInfo(json);
          setErrorMessage(false);
        }
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("That did not work! :'( Please try again.");
        setSubmitting(false);
      });
  };

  const clear = () => {
    setRoomInfo(null);
    roomInputRef.current.value = "";
  };

  return (
    <Form onSubmit={submitRoomForm}>
      <FormHeader>
        Create a new owner broadcast-only room with these settings:
      </FormHeader>
      <SettingsList>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>
            Owner broadcast-only (only owners can screen share, record, user
            camera/mic)
          </ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Custom room name</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Admin camera off to start</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Admin mic off to start</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Local recordings enabled</ListItemText>
        </SettingsListItem>
      </SettingsList>
      <Label htmlFor="roomName">Webinar room name</Label>
      <Input ref={roomInputRef} id="roomName" type="text" required />
      <FlexRow>
        <input ref={privacyInputRef} id="privacySetting" type="checkbox" />
        <Label htmlFor="privacySetting">
          Make room private (guests will need to be admitted to the call)
        </Label>
      </FlexRow>
      <SubmitButton type="submit" value="Create room" disabled={submitting} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {roomInfo && (
        <ResultsContainer>
          <ClearButton onClick={clear}>Clear results</ClearButton>
          <Result main label="Shareable URL:" value={roomInfo?.url} />
          <Result label="Privacy:" value={roomInfo?.privacy} />
          <Result label="Name:" value={roomInfo?.name} />
          <Result
            label="Autojoin:"
            value={roomInfo?.config?.autojoin.toString()}
          />
          <Result
            label="Broadcast only:"
            value={roomInfo?.config?.owner_only_broadcast.toString()}
          />
          <Result
            label="Start with audio off:"
            value={roomInfo?.config?.start_audio_off.toString()}
          />
          <Result
            label="Start with video off:"
            value={roomInfo?.config?.start_video_off.toString()}
          />
          <Result
            label="Local recordings enabled:"
            value={roomInfo?.config?.enable_recording.toString()}
          />
        </ResultsContainer>
      )}
    </Form>
  );
};

const FlexRow = styled.div`
  display: flex;
  align-items: baseline;
`;

export default RoomForm;
