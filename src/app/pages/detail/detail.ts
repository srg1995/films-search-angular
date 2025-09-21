import { Component, signal, Signal } from '@angular/core';
import { Film } from '../../services/film.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  isLoading = false;
  public data: Signal<Film> = signal({
    adult: false,
    backdrop_path: '/1RgPyOhN4DRs225BGTlHJqCudII.jpg',
    genre_ids: [16, 28, 14, 53],
    id: 1311031,
    original_language: 'ja',
    original_title: '劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来',
    overview:
      'El Cuerpo de Cazadores de Demonios se enfrenta a los Doce Kizuki restantes antes de enfrentarse a Muzan en el Castillo del Infinito para derrotarlo de una vez por todas.',
    popularity: 766.0999,
    poster_path: '/iWLV12z9oexSRLz2WKyqCZbKoPA.jpg',
    release_date: '2025-07-18',
    title: 'Guardianes de la noche: Kimetsu no Yaiba La fortaleza infinita',
    video: false,
    vote_average: 7.7,
    vote_count: 279,
  });
}
