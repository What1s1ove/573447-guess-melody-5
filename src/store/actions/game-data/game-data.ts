import { GameDataActionType } from '~/common/enums/enums';
import { GameDataAC, GameQuestion } from '~/common/types/types';

const GameDataActionCreator: GameDataAC = {
  loadQuestion: (questions) => ({
    type: GameDataActionType.LOAD_QUESTIONS,
    payload: {
      questions,
    },
  }),
  fetchQuestions: () => (dispatch, _, { api }) => {
    api
      .get<GameQuestion[]>(`/questions`)
      .then(({ data }) => dispatch(GameDataActionCreator.loadQuestion(data)))
      .catch((err: Error) => {
        throw err;
      });
  },
};

export { GameDataActionCreator };
