import React from "react";
import { Wrapper, Header } from "./Styled";
import Calculator from "../Calculator";

function App() {
  return (
    <Wrapper>
      <Header>
        <p>
          裝置解析度大於等於1024 Pixel時，頁面設計之寬度解析度以1024 Pixel呈現。
          裝置解析度小於1024 Pixel時，頁面設計之寬度解析度以360 Pixel呈現。
        </p>
      </Header>
      <Calculator />
    </Wrapper>
  );
}

export default App;
