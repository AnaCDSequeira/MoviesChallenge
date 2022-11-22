import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  gap: 30px;
  opacity: 0.5;
`;

const FooterLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: #ffffff;
`;

export { Container, FooterLink };
