import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, ResourceRef, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment.local';

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

export interface Genre {
  id: number;
  name: string;
}
export interface GenreResponse {
  genres: Genre[];
}

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.tmdbApiKey;

  getFilms(page: Signal<number>): ResourceRef<FilmsResponse | undefined> {
    return httpResource<FilmsResponse>(() => ({
      url: `${this.apiUrl}/movie/popular?language=es-ES&page=${page()}`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    }));
  }
  getFilmById(): void {}
  getGenre(): ResourceRef<GenreResponse | undefined> {
    return httpResource<GenreResponse>(() => ({
      url: `${this.apiUrl}/genre/movie/list?language=es`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    }));
  }
}
