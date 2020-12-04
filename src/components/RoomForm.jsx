import React, { useState } from "react";
import { SettingsList, SettingsListItem, Icon, ListItemText } from "./List";
import { Form, FormHeader, Label, Input, SubmitButton } from "./Form";
import checkmark from "./images/checkmark.svg";

const RoomForm = () => {
  const [roomName, setRoomName] = useState();
  const [submitting, setSubmitting] = useState();
  // const [roomName, setRoomName] = useState();
  // const [roomName, setRoomName] = useState();
  const submitRoomForm = () => {
    console.log("submit!");
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
      <Input id="roomName" type="text" required />
      <SubmitButton type="submit" value="Create room" disabled={submitting} />
    </Form>
  );
};

export default RoomForm;
