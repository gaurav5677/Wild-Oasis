import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/input";

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("click in ")}> Click here</Button>
        <Button onClick={() => alert("click in ")}> Click here</Button>

        <Input type="number" placeholder="number of guests " />
        <Input type="number" placeholder="number of guests " />
      </StyledApp>
    </>
  );
}

export default App;
