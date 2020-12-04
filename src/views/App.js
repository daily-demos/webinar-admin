import styled from "styled-components";
import logo from "../components/images/logo.svg";
import theme from "../theme";
import RoomForm from "../components/RoomForm";
import { Header, SubHeader, BodyText } from "../components/Text";
import TokenForm from "../components/TokenForm";

function App() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <Body>
        <Header>Welcome to the webinar admin portal!</Header>
        <SubHeader>
          Please use these forms for creating new broadcast-only rooms and admin
          tokens.
        </SubHeader>
        <BodyText>
          Use the room form to create a room for a webinar. Use the meeting
          token form for admin links.
        </BodyText>
        <BodyText>
          Rooms are created for{" "}
          <A
            rel="noreferrer nooppener"
            href="https://dashboard.daily.co/?domain=daily-webinars"
            target="_blank"
          >
            daily-webinars.daily.co
          </A>
          .
        </BodyText>
        <BodyText>
          To create rooms with different settings, please use the{" "}
          <A
            rel="noreferrer nooppener"
            href="https://dashboard.daily.co/?domain=daily-webinars"
            target="_blank"
          >
            dashboard
          </A>
          .
        </BodyText>
        <RoomForm />
        <TokenForm />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  padding: 2rem;
  margin: auto;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const A = styled.a`
  text-decoration: none;
  color: ${theme.colors.blueDark};
  text-decoration: underline;
`;

export default App;
