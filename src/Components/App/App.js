import React from "react";
import { Wrapper, Header } from "./Styled";
import Calculator from "../Calculator";

function App() {
  return (
    <Wrapper>
      <Header>
        Shopping Liao's Simple Calculator
      </Header>
      <Calculator />
    </Wrapper>
  );
}

export default App;
