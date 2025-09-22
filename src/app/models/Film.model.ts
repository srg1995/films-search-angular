import { Genre } from './Genre.model';

export interface Film {
  id: number;
  poster_path: string;
  title: string;
  name?: string;
  release_date: string;
  first_air_date?: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
  genres: Genre[];
}
