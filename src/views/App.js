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
        <Header>Welcome, admins!</Header>
        <SubHeader>
          Please use these forms for creating new broadcast-only rooms and admin
          tokens.
        </SubHeader>
        <ul>
          <li>
            <BodyText>
              Use the room form (or dashboard) to create a room for a webinar.
              Use the meeting token form to create webinar admin links.
            </BodyText>
          </li>
          <li>
            <BodyText>
              To create or edit rooms with different settings than the defaults
              listed below, please use the{" "}
              <A
                rel="noreferrer nooppener"
                href="https://dashboard.daily.co/"
                target="_blank"
              >
                dashboard
              </A>
              .
            </BodyText>
          </li>
        </ul>
        <RoomForm />
        <TokenForm />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
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
