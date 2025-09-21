import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, ResourceRef, Signal } from '@angular/core';
import { Observable } from 'rxjs';

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
}

export interface FilmsResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=es-ES';

  privateapiKey = import.meta.env['VITE_TMDB_API_KEY'];

  getFilms(page: Signal<number>): ResourceRef<FilmsResponse | undefined> {
    return httpResource<FilmsResponse>(() => ({
      url: `${this.apiUrl}'&page=${page()}'`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRkOGMwZmUzY2MwNGVkZGMxOWZmYTFkZjJmMmM3NCIsIm5iZiI6MTc1ODEwMDI3Ny4xNTkwMDAyLCJzdWIiOiI2OGNhN2IzNTIwZmYwZWIyNjVlMzYyM2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bzlnEE7F7IxBtAtaeX2zgWbS_6rckMnlmmK5pLpMPkc`,
      },
    }));
  }
}
