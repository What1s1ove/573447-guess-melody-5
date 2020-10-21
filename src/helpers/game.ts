import {
  IArtistQuestion,
  IArtistQuestionAnswer,
  IGenreQuestion,
} from '~/common/interfaces/game/game';
import { GenreQuestionUserAnswers } from '~/common/types/types';

const checkIsArtistAnswerCorrect = (
  question: IArtistQuestion,
  answer: IArtistQuestionAnswer
) => {
  const isCorrect = answer.artist === question.song.artist;

  return isCorrect;
};

const checkIsGenreAnswerCorrect = (
  question: IGenreQuestion,
  answers: GenreQuestionUserAnswers
) => {
  const hasCorrectAnswer = answers.every((_, idx) => {
    const isCorrect = question.answers[idx].genre === question.genre;

    return isCorrect;
  });

  return hasCorrectAnswer;
};

export { checkIsArtistAnswerCorrect, checkIsGenreAnswerCorrect };
