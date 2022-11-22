import {
  Container,
  QuestionNumber,
  QuestionToShow,
  RadioButton,
} from "./styles.js";

function Question(props) {
  const { question } = props;

  return (
    <>
      <Container>
        <QuestionNumber>Question {question?.index + 1} of 3:</QuestionNumber>
        <RadioButton>
          <input type="radio" checked={question.index === 0 ? true : false} />
          <input type="radio" checked={question.index === 1 ? true : false} />
          <input type="radio" checked={question.index === 2 ? true : false} />
        </RadioButton>
      </Container>
      <QuestionToShow>{question?.title}</QuestionToShow>
    </>
  );
}

export { Question };
