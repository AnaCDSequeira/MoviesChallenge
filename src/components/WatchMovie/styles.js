import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px solid #61d6b6;
  border-radius: 5px;
  background-color: #ffffff;
  width: 680px;
  height: 400px;
  margin-top: 80px;
`;

const Title = styled.h3`
  font-size: 32px;
  text-transform: uppercase;
  color: #61d6b6;
  padding-top: 10px;
  padding-bottom: 60px;
`;

const SecondaryTitle = styled.h4`
  font-size: 24px;
  color: #081f44;
  padding-bottom: 30px;
`;

const Button = styled.button`
  background-color: #ec5632;
  color: #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  width: 450px;
  height: 50px;
  font-size: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  a {
    text-decoration: none;
    color: #ffffff;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  }
  &:hover {
    background: #fe3f11;
  }
`;

export { Container, Title, SecondaryTitle, Button };
