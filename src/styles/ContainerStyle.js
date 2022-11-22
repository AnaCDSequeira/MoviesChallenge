import styled from "styled-components";
import image from "../utils/assets/background.svg";

const Container = styled.main`
  background-image: linear-gradient(
      109.6deg,
      rgba(49, 46, 46, 0.882) 100%,
      rgb(63, 61, 61) 100%
    ),
    url(${image});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container };
