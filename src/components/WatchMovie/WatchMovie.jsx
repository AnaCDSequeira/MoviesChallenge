import { Container, Title, SecondaryTitle, Button } from "./styles";

function WatchMovie(props) {
  const { url } = props;
  console.log(url);

  return (
    <>
      <Container>
        <Title>watch new movies for free!</Title>
        <SecondaryTitle>
          Watch any movies online for free without ads!
        </SecondaryTitle>
        <SecondaryTitle>Have fun watching your favorite movies!</SecondaryTitle>
        <Button>
          <a href={url} target="_blank">
            Watch here!
          </a>
        </Button>
      </Container>
    </>
  );
}
export { WatchMovie };
