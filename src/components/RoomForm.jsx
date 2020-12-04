import React, { useRef, useState } from "react";
import { SettingsList, SettingsListItem, Icon, ListItemText } from "./List";
import { Form, FormHeader, Label, Input, SubmitButton } from "./Form";
import { ErrorMessage } from "./Text";
import checkmark from "./images/checkmark.svg";

const RoomForm = () => {
  const roomInputRef = useRef();
  const [submitting, setSubmitting] = useState();
  const [errorMessage, setErrorMessage] = useState(null); // null | string

  const submitRoomForm = async (e) => {
    e.preventDefault();
    if (!roomInputRef?.current?.value) {
      setErrorMessage(
        "Eep, something when wrong! We couldn't access the input value. :|"
      );
    }
    console.log(process.env);
    const data = {
      properties: {
        autojoin: true,
        start_video_off: true,
        start_audio_off: true,
        owner_only_broadcast: true,
      },
      privacy: "public",
      name: roomInputRef?.current?.value,
    };
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/rooms`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_DAILY_API_KEY}`,
      },
    });
    console.log(response);
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
    </Form>
  );
};

export default RoomForm;
