import { CardImage } from "./styles.js";

function Card(props) {
  const { movieID, movieCard, onClick } = props;

  return <CardImage onClick={() => onClick(movieID)} src={movieCard} alt="" />;
}

export { Card };
