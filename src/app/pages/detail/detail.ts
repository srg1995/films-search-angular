import { Component, inject, ResourceRef, signal, Signal } from '@angular/core';
import { FilmsService } from '../../services/film.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({
  selector: 'app-detail',
  imports: [RouterLink, CapitalizePipe],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  private route = inject(ActivatedRoute);
  public filmsService = inject(FilmsService);

  id = Number(this.route.snapshot.paramMap.get('id') ?? 0); // string | null
  protected readonly filmResource = this.filmsService.getFilmById(this.id);

  get isLoading(): boolean {
    return this.filmResource.status() === 'loading';
  }
}
