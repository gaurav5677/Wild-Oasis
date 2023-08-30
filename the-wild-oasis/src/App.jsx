import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and Out</Heading>
        <Button onClick={() => alert("click in ")}> Click here</Button>
        <Button onClick={() => alert("click in ")}> Click here</Button>
        <Heading as="h3">Form</Heading>

        <Input type="number" placeholder="number of guests " />
        <Input type="number" placeholder="number of guests " />
      </StyledApp>
    </>
  );
}

export default App;
