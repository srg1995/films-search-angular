import { Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Filters } from '../../components/filters/filters';
import { Pagination } from '../../components/pagination/pagination';
import { FilmsResponse, FilmsService, GenreResponse } from '../../services/film.service';
import { FiltersStore } from '../../services/store.service';
import { RouterLink } from '@angular/router';
import { effect } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Filters, Card, Pagination, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  public readonly filmsService = inject(FilmsService);
  protected filmsData = signal<FilmsResponse | undefined>(undefined);
  protected genresData = signal<GenreResponse | undefined>(undefined);
  protected page: WritableSignal<number> = signal(1);
  protected isLoading = computed(() => !this.filmsData());
  protected totalPages = computed(() => this.filmsData()?.total_pages ?? 1);

  constructor(public store: FiltersStore) {
    effect(() => {
      this.filmsService.getFilms(this.page()).subscribe({
        next: (films) => this.filmsData.set(films),
        error: () => this.filmsData.set(undefined),
      });
      this.filmsService.getGenre().subscribe({
        next: (genres) => this.genresData.set(genres),
        error: () => this.genresData.set(undefined),
      });
    });
  }

  protected isSelected(film: any): boolean {
    return (
      this.store.selectedFilters().length === 0 ||
      this.store.selectedFilters().some((g) => film.genre_ids.includes(g.id))
    );
  }
  /* httpResource experimental
  totalPages = computed(() => {
    return this.filmsResource.value()?.total_pages ?? 1;
  });

  get genres(): GenreResponse {
    const data = this.genresResource.value();
    return data?.genres ?? [];
  }
  updateFilms(): void {
    this.filmsResource = this.filmsService.getFilms(this.page);
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
*/
  onPageChange(newPage: number) {
    this.page.set(newPage);
  }
  login(): void {
    if (this.isLoged()) {
      localStorage.removeItem('userLoged');
    } else {
      localStorage.setItem('userLoged', 'true');
    }
  }
  isLoged(): boolean {
    const user = typeof localStorage !== 'undefined' && localStorage.getItem('userLoged');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
