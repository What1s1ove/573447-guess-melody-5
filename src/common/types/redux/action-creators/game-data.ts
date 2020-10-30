import { LoadQuestionsAction } from '~/common/types/redux/actions//game-data';
import { AppThunk } from '~/common/types/redux/thunk/thunk';
import { GameQuestion } from '~/common/types/game/game';

type LoadQuestionAc = (question: GameQuestion[]) => LoadQuestionsAction;

type FetchQuestions = () => AppThunk;

type GameDataAC = {
  loadQuestion: LoadQuestionAc;
  fetchQuestions: FetchQuestions;
};

export { LoadQuestionAc, GameDataAC };
