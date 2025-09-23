import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Filters } from '../../components/filters/filters';
import { Pagination } from '../../components/pagination/pagination';
import { FilmsService } from '../../services/film.service';
import { FiltersStore } from '../../services/store.service';
import { Genre } from '../../models/Genre.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Filters, Card, Pagination, RouterLink],

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
