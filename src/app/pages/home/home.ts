import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Filters } from '../../components/filters/filters';
import { Pagination } from '../../components/pagination/pagination';
import { FilmsService, Genre, GenreResponse } from '../../services/film.service';
import { FiltersStore } from '../../services/store.service';

@Component({
  selector: 'app-home',
  imports: [Filters, Card, Pagination],

  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  constructor(public store: FiltersStore) {}
  public readonly filmService = inject(FilmsService);

  page: WritableSignal<number> = signal(1);
  films = this.filmService.getFilms(this.page);
  genresResource = this.filmService.getGenre();

  get genres(): Genre[] {
    const data = this.genresResource.value();
    return data?.genres ?? [];
  }
  updateFilms(): void {
    this.films = this.filmService.getFilms(this.page);
  }

  get isLoading(): boolean {
    return this.films.status() === 'loading';
  }

  public nextPage(): void {
    console.log('pasa pagina');
    this.page.update((p) => p + 1);
  }

  public isSelected(film: any): boolean {
    return (
      this.store.selectedFilters().length === 0 ||
      this.store.selectedFilters().some((g) => film.genre_ids.includes(g.id))
    );
  }
}
