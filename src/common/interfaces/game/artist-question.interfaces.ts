import { QuestionType } from '~/common/enums/enums';

interface IArtistQuestion {
  answers: IArtistQuestionAnswer[];
  song: IArtistQuestionSong;
  type: QuestionType.ARTIST;
}

interface IArtistQuestionSong {
  artist: string;
  src: string;
}

interface IArtistQuestionAnswer {
  artist: string;
  picture: string;
}

export { IArtistQuestion, IArtistQuestionSong, IArtistQuestionAnswer };
