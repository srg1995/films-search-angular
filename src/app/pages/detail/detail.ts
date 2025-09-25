import { Component, computed, effect, inject, signal } from '@angular/core';
import { FilmsService } from '../../services/film.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Film } from '../../models/Film.model';

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  private route = inject(ActivatedRoute);
  public filmsService = inject(FilmsService);
  protected filmData = signal<Film | undefined>(undefined);
  private id!: number;
  protected isLoading = signal(false);

  constructor() {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0); // string | null

    effect(() => {
      this.filmsService.getFilmById(this.id).subscribe({
        next: (film) => this.filmData.set(film),
        error: () => this.filmData.set(undefined),
        complete: () => this.isLoading.set(false),
      });
    });
  }
}
