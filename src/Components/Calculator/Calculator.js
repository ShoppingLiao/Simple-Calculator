import React from "react";
import {
  Wrapper,
  Content,
  Row,
  BigButton,
  Button,
  BlueButton,
  GrayButton
} from "./Styled";

export default function Calculator() {
  return (
    <Wrapper>
      <Content>0</Content>
      <Row>
        <GrayButton>AC</GrayButton>
        <GrayButton>+/-</GrayButton>
        <GrayButton>%</GrayButton>
        <BlueButton>÷</BlueButton>
      </Row>
      <Row>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <BlueButton>×</BlueButton>
      </Row>
      <Row>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <BlueButton>-</BlueButton>
      </Row>
      <Row>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <BlueButton>+</BlueButton>
      </Row>
      <Row>
        <BigButton>0</BigButton>
        <Button>.</Button>
        <BlueButton>=</BlueButton>
      </Row>
    </Wrapper>
  );
}
