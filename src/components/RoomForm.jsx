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
    const url = `${process.env.REACT_APP_API_BASE_URL}rooms`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_DAILY_API_KEY}`,
      },
      mode: "no-cors",
      body: JSON.stringify({
        properties: {
          start_video_off: false,
          start_audio_off: false,
          owner_only_broadcast: true,
        },
        privacy: "public",
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
      </SettingsList>
      <Label htmlFor="roomName">Webinar room name</Label>
      <Input ref={roomInputRef} id="roomName" type="text" required />
      <SubmitButton type="submit" value="Create room" disabled={submitting} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {roomInfo && (
        <ResultsContainer>
          {console.log(roomInfo)}
          <ClearButton onClick={clear}>Clear results</ClearButton>
          <Result
            main
            label="Webinar room URL (share with webinar participants):"
            value={`https://discover.daily.co/${roomInfo?.name}`}
            href
          />
          <Result label="Privacy:" value={roomInfo?.privacy} />
          <Result label="Name:" value={roomInfo?.name} />
          <Result
            label="Broadcast only:"
            value={roomInfo?.config?.owner_only_broadcast.toString()}
          />
        </ResultsContainer>
      )}
    </Form>
  );
};

export default RoomForm;
