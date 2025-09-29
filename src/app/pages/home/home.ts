import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Filters } from '../../components/filters/filters';
import { Pagination } from '../../components/pagination/pagination';
import { FilmsService } from '../../services/film.service';
import { FiltersStore } from '../../services/filters-store.service';
import { RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { Login } from '../../components/login/login';
import { UserStore } from '../../services/user-store.service';

@Component({
  selector: 'app-home',
  imports: [Filters, Card, Pagination, RouterLink, Login],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  protected readonly filmsService = inject(FilmsService);

  protected page: WritableSignal<number> = signal(1);
  protected isLoading = computed(() => !this.filmsData());
  protected totalPages = computed(() => this.filmsData()?.total_pages ?? 1);

  protected filmsData = toSignal(this.filmsService.getFilms(this.page()));
  protected genresData = toSignal(this.filmsService.getGenre());

  protected storeUser = inject(UserStore);
  protected user = this.storeUser.user; // ya es una signal reactiva
  protected derivedUser = computed(() => this.storeUser.user()?.displayName);
  protected isLoged = computed(() => this.storeUser.isLoged());
  constructor(public store: FiltersStore) {}

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
}
