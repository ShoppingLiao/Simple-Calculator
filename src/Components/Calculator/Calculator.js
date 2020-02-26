import React, { useState } from 'react';
import {
  Wrapper,
  Content,
  Row,
  BigButton,
  Button,
  BlueButton,
  GrayButton
} from './Styled';

export default function Calculator() {
  const [number, setNumber] = useState(0); // 顯示用的數字
  const [operator, setOperator] = useState(); // 運算符號
  const [oldNumber, setOldNumber] = useState(); // 計算時暫存的數字

  function handleNumClick(num) {
    if (number === 0) {
      if (num === 0) {
        return;
      }
      setNumber(`${num}`);
    } else {
      setNumber(`${number}${num}`);
    }
  }

  function handleOperatorClick(key) {
    // 第一次進入
    if (!operator) {
      // 把現在的數字存起來
      setOldNumber(number);
      setOperator(key);
      setNumber(0);
      return;
    }

    switch (key) {
      case '+': {
        setNumber(Number(oldNumber) + Number(number));
        setOperator();
        setOldNumber();
        break;
      }
      case '-': {
        setNumber(Number(oldNumber) - Number(number));
        setOperator();
        setOldNumber();
        break;
      }
      case '=': {
        if (operator === '+') {
          setNumber(Number(oldNumber) + Number(number));
          setOperator();
          setOldNumber();
        } else if (operator === '-') {
          setNumber(Number(oldNumber) - Number(number));
          setOperator();
          setOldNumber();
        }
        break;
      }

      default:
        return;
    }
  }

  function handleClear() {
    setNumber(0);
    setOperator();
    setOldNumber();
  }

  function handleDotClick() {
    if (!number) {
      setNumber('0.');
      return;
    }
    if (String(number).includes('.')) {
      return;
    }

    setNumber(`${number}.`);
  }

  return (
    <Wrapper>
      <Content>{number}</Content>
      <Row>
        <GrayButton onClick={() => handleClear()}>AC</GrayButton>
        <GrayButton>+/-</GrayButton>
        <GrayButton>%</GrayButton>
        <BlueButton>÷</BlueButton>
      </Row>
      <Row>
        <Button onClick={() => handleNumClick(7)}>7</Button>
        <Button onClick={() => handleNumClick(8)}>8</Button>
        <Button onClick={() => handleNumClick(9)}>9</Button>
        <BlueButton>×</BlueButton>
      </Row>
      <Row>
        <Button onClick={() => handleNumClick(4)}>4</Button>
        <Button onClick={() => handleNumClick(5)}>5</Button>
        <Button onClick={() => handleNumClick(6)}>6</Button>
        <BlueButton onClick={() => handleOperatorClick('-')}>-</BlueButton>
      </Row>
      <Row>
        <Button onClick={() => handleNumClick(1)}>1</Button>
        <Button onClick={() => handleNumClick(2)}>2</Button>
        <Button onClick={() => handleNumClick(3)}>3</Button>
        <BlueButton onClick={() => handleOperatorClick('+')}>+</BlueButton>
      </Row>
      <Row>
        <BigButton onClick={() => handleNumClick(0)}>0</BigButton>
        <Button onClick={() => handleDotClick()}>.</Button>
        <BlueButton onClick={() => handleOperatorClick('=')}>=</BlueButton>
      </Row>
    </Wrapper>
  );
}
