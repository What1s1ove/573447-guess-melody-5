import { IArtistQuestionSong } from '~/common/interfaces/game/artist-question-song.interface';
import { IArtistQuestionAnswer } from '~/common/interfaces/game/artist-question-answer.interface';
import { QuestionType } from '~/common/enums/enums';

interface IArtistQuestion {
  type: QuestionType.ARTIST;
  song: IArtistQuestionSong;
  answers: IArtistQuestionAnswer[];
}

export { IArtistQuestion };
