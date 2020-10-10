import { QuestionType } from '~/common/enums/enums';

interface IArtistQuestion {
  id: string;
  type: QuestionType.ARTIST;
  song: IArtistQuestionSong;
  answers: IArtistQuestionAnswer[];
}

interface IArtistQuestionSong {
  artist: string;
  src: string;
}

interface IArtistQuestionAnswer {
  picture: string;
  artist: string;
}

export { IArtistQuestion, IArtistQuestionSong, IArtistQuestionAnswer };
