import styled from "styled-components";

const CardImage = styled.img`
  border-radius: 5px;
  opacity: 1;
  width: 200px;
  height: 290px;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
  :hover {
    opacity: 0.6;
  }
`;

export { CardImage };
