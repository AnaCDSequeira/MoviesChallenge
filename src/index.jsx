import { createRoot } from "react-dom/client";
import { Logo } from "./components/Logo/Logo";
import { Movies } from "./components/MoviesCard/Movies";
import { Footer } from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/ContainerStyle";

const app = document.getElementById("app");
const root = createRoot(app);

function App() {
  return (
    <>
      <Container>
        <Logo />
        <Movies />
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  );
}

root.render(<App />);
