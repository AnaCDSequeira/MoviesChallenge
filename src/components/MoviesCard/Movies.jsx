import { useState } from "react";
import { Card } from "../Card/Card";
import { movieList } from "../../utils/movies.js";
import { Question } from "../Question/Question.jsx";
import { questionList } from "../../utils/questions.js";
import { WatchMovie } from "../WatchMovie/WatchMovie.jsx";
import { CardContainer } from "./styles.js";

function Movies() {
  const [movies, setMovies] = useState(movieList);
  const [question, setQuestion] = useState(questionList[0]);
  const [imdbUrl, setImdbUrl] = useState("");

  function findMovie(movieId) {
    console.log(movies);
    return movies.find((movie) => movie.id === movieId);
  }

  let clickHandler = (movieId) => {
    const nextIndex = question.index + 1;
    const nextQuestion = questionList[nextIndex];
    setQuestion(nextQuestion);

    const associatedMovies = findMovie(movieId)?.associatedMovies;
    setMovies(associatedMovies);

    if (!associatedMovies) {
      const movieUrl = findMovie(movieId).url;
      console.log(movieId);
      setImdbUrl(movieUrl);
    }
  };

  const cards = movies?.map((movie) => (
    <Card movieID={movie.id} movieCard={movie.image} onClick={clickHandler} />
  ));

  const questionToShow = question ? <Question question={question} /> : "";

  return (
    <>
      {questionToShow}
      <CardContainer>
        {cards ? cards : <WatchMovie url={imdbUrl} />}
      </CardContainer>
    </>
  );
}

export { Movies };
