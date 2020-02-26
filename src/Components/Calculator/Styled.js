import styled from 'styled-components';

export const Wrapper = styled.div`
  /* 長寬比先用iphone 6 的16:9 */
  @media (max-width: 1024px) {
    width: 360px;
    height: 640px;
  }

  width: 1024px;
  height: 1820.45px;
  margin: 20px auto;
  background: linear-gradient(to bottom, #84baff 0%, #0b0e1c 100%);
  text-align: center;
`;

export const Content = styled.div`
  text-align: right;
  padding: 4rem 1rem 0.5rem;
  font-size: 4rem;
  color: #fff;
  white-space: nowrap;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.5rem 0;
`;

const ButtonStyle = `
  width: 3.8rem;
  height: 3.8rem;
  line-height: 3.8rem;
  font-size: 2rem;
  text-align: center;
  border-radius: 1.9rem;
  cursor: pointer;
  user-select: none;
  `;
export const BigButton = styled.div`
  color: #fff;
  background: #333333;
  &:active {
    background: #1a1a1a;
  }
  ${ButtonStyle};
  width: 8.2rem;
`;

export const Button = styled.div`
  color: #fff;
  background: #333333;
  &:active {
    background: #1a1a1a;
  }
  ${ButtonStyle};
`;

export const BlueButton = styled.div`
  color: #fff;
  background: #3091fd;
  &:active {
    background: #0377fc;
  }
  ${ButtonStyle};
`;

export const GrayButton = styled.div`
  color: #333;
  background: #afafaf;
  &:active {
    background: #999999;
  }
  ${ButtonStyle};
`;
