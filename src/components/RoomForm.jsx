import React, { useRef, useState } from "react";
import { SettingsList, SettingsListItem, Icon, ListItemText } from "./List";
import {
  Form,
  FormHeader,
  Label,
  Input,
  SubmitButton,
  ClearButton,
} from "./Form";
import { BodyText, ErrorMessage } from "./Text";
import checkmark from "./images/checkmark.svg";

const RoomForm = () => {
  const roomInputRef = useRef();
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
        },
        privacy: "public",
        name: roomInputRef?.current?.value,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setRoomInfo(json);
        setSubmitting(false);
      })
      .catch((err) => {
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
          <ListItemText>Public (anyone with link can join</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Admin camera off to start</ListItemText>
        </SettingsListItem>
        <SettingsListItem>
          <Icon src={checkmark} alt="checkmark" />
          <ListItemText>Admin mic off to start</ListItemText>
        </SettingsListItem>
      </SettingsList>
      <Label htmlFor="roomName">Room name</Label>
      <Input ref={roomInputRef} id="roomName" type="text" required />
      <SubmitButton type="submit" value="Create room" disabled={submitting} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {roomInfo && (
        <>
          <ClearButton onClick={clear}>Clear results</ClearButton>
          <BodyText>Shareable URL: {roomInfo?.url}</BodyText>
          <BodyText>Privacy: {roomInfo?.privacy}</BodyText>
          <BodyText>Name: {roomInfo?.name}</BodyText>
          <BodyText>Autojoin: {roomInfo?.config?.autojoin}</BodyText>
          <BodyText>Autojoin: {roomInfo?.config?.autojoin}</BodyText>
          <BodyText>
            Broadcast only: {roomInfo?.config?.owner_only_broadcast}
          </BodyText>
          <BodyText>
            Start with audio off: {roomInfo?.config?.start_audio_off}
          </BodyText>
          <BodyText>
            Start with video off: {roomInfo?.config?.start_video_off}
          </BodyText>
        </>
      )}
    </Form>
  );
};

export default RoomForm;
