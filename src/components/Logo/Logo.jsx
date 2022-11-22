import LogoImage from "../../utils/assets/logo.svg";
import { Container } from "./styles.js";

function Logo() {
  return (
    <>
      <Container>
        <img src={LogoImage} alt="" />
      </Container>
    </>
  );
}

export { Logo };
