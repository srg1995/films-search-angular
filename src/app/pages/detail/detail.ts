import { Component, computed, effect, inject, signal } from '@angular/core';
import { FilmsService, GenreResponse } from '../../services/film.service';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { Film } from '../../models/Film.model';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  private route = inject(ActivatedRoute);
  public filmsService = inject(FilmsService);

  protected isLoading = signal(false);

  id = Number(this.route.snapshot.paramMap.get('id') ?? 0); // string | null

  filmData = toSignal(this.filmsService.getFilmById(this.id));
}
