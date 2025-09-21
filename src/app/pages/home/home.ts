import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
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
  filmsResource = this.filmService.getFilms(this.page);
  genresResource = this.filmService.getGenre();

  totalPages = computed(() => {
    return this.filmsResource.value()?.total_pages ?? 1;
  });

  get genres(): Genre[] {
    const data = this.genresResource.value();
    return data?.genres ?? [];
  }
  updateFilms(): void {
    this.filmsResource = this.filmService.getFilms(this.page);
  }

  get isLoading(): boolean {
    return this.filmsResource.status() === 'loading';
  }

  public isSelected(film: any): boolean {
    return (
      this.store.selectedFilters().length === 0 ||
      this.store.selectedFilters().some((g) => film.genre_ids.includes(g.id))
    );
  }

  onPageChange(newPage: number) {
    this.page.set(newPage);
  }
}
