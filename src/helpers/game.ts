import {
  IArtistQuestion,
  IArtistQuestionAnswer,
  IGenreQuestion,
  IGenreQuestionAnswer,
} from '~/common/interfaces/game/game';

const checkIsArtistAnswerCorrect = (
  question: IArtistQuestion,
  answer: IArtistQuestionAnswer
) => {
  const isCorrect = answer.artist === question.song.artist;

  return isCorrect;
};

const checkIsGenreAnswerCorrect = (
  question: IGenreQuestion,
  answers: IGenreQuestionAnswer[]
) => {
  const hasCorrectAnswer = answers.every((_, idx) => {
    const isCorrect = question.answers[idx].genre === question.genre;

    return isCorrect;
  });

  return hasCorrectAnswer;
};

export { checkIsArtistAnswerCorrect, checkIsGenreAnswerCorrect };
