import React, { useState } from "react";
import { SettingsList, SettingsListItem, Icon, ListItemText } from "./List";
import { Form, FormHeader, Label, Input, SubmitButton } from "./Form";
import checkmark from "./images/checkmark.svg";

const TokenForm = () => {
  const [roomName, setRoomName] = useState();
  const [submitting, setSubmitting] = useState();
  // const [roomName, setRoomName] = useState();
  // const [roomName, setRoomName] = useState();
  const submitRoomForm = () => {
    console.log("submit!");
  };
  return (
    <Form onSubmit={submitRoomForm}>
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
      <Input id="roomName" type="text" required />
      <SubmitButton type="submit" value="Create token" disabled={submitting} />
    </Form>
  );
};

export default TokenForm;
