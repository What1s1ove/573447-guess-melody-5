import { GameDataActionType } from '~/common/enums/enums';
import { mockedQuestions } from '~/mocks/mocks';
import { GameDataActionCreator } from './game-data';

describe(`Game-data action creator works correctly`, () => {
  it(`loadQuestions ac returns correct action`, () => {
    expect(GameDataActionCreator.loadQuestion(mockedQuestions)).toEqual({
      type: GameDataActionType.LOAD_QUESTIONS,
      payload: {
        questions: mockedQuestions,
      },
    });
  });
});
