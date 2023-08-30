import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orange; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and Out</Heading>
              <Button onClick={() => alert("click in ")}>Click here</Button>
              <Button
                variation="secondary"
                size="small "
                onClick={() => alert("click in ")}
              >
                Click here
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <form>
              <Heading as="h3">Form</Heading>

              <Input type="number" placeholder="number of guests " />
              <Input type="number" placeholder="number of guests " />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
