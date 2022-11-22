import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 90px;
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 16px 10px;
`;

const QuestionNumber = styled.h3`
  color: #22daa8;
  text-transform: uppercase;
  font-size: 19px;
`;

const QuestionToShow = styled.h3`
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 34px;
`;

const RadioButton = styled.div`
  margin-top: 18px;
  color: #22daa8;
  background: white;
  input {
    -webkit-appearance: none;
    margin: 0 8px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 1px solid #22daa8;
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &:checked:before {
      background: #22daa8;
    }
  }
`;

export { Container, QuestionNumber, QuestionToShow, RadioButton };
