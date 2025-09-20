import { Component, inject, Signal, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Filters } from '../../components/filters/filters';
import { Pagination } from '../../components/pagination/pagination';
import { Film, FilmsService } from '../../services/get-films';

@Component({
  selector: 'app-home',
  imports: [Filters, Card, Pagination],

  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  protected readonly title = signal('films-search-angular');
  protected readonly isLoading = signal(false);
  public readonly filmService = inject(FilmsService);

  page: Signal<number> = signal(1);
  films: Signal<Film[]> = signal(this.filmService.getFilms(this.page()).results);
  actualizarFilms(): void {
    const films = this.filmService.getFilms(this.page());
  }
}
