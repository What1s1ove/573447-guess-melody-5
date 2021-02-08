import { ApiRoute, GameDataActionType } from '~/common/enums/enums';
import { GameDataAC, GameQuestion } from '~/common/types/types';

const GameDataActionCreator: GameDataAC = {
  loadQuestion: (questions) => ({
    type: GameDataActionType.LOAD_QUESTIONS,
    payload: {
      questions,
    },
  }),
  fetchQuestions: () => (dispatch, _, { api }) => (
    api
      .get<GameQuestion[]>(ApiRoute.QUESTIONS)
      .then(({ data }) => dispatch(GameDataActionCreator.loadQuestion(data)))
      .catch((err: Error) => {
        console.error(err.message);
      })
  ),
};

export { GameDataActionCreator };
