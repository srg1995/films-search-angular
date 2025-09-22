import { httpResource } from '@angular/common/http';
import { Injectable, ResourceRef, Signal } from '@angular/core';
import { environment } from '../enviroments/enviroment.local';
import { Film } from '../models/Film.model';
import { Genre } from '../models/Genre.model';

export interface FilmsResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
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
  getFilmById(id: number): ResourceRef<Film | undefined> {
    console.log('service' + id);
    return httpResource<Film>(() => ({
      url: `${this.apiUrl}/movie/${id}?language=es-ES`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    }));
  }
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
