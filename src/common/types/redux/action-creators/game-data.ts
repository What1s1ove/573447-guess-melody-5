import { LoadQuestionsAction } from '~/common/types/redux/actions//game-data';
import { AppThunk } from '~/common/types/redux/thunk/thunk';

type LoadQuestionAc = () => LoadQuestionsAction;

type FetchQuestions = () => AppThunk;

type GameDataAc = {
  loadQuestion: LoadQuestionAc;
  fetchQuestions: FetchQuestions;
};

export { LoadQuestionAc, GameDataAc };
