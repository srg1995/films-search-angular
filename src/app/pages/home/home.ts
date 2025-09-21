import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card';
import { Filters } from '../../components/filters/filters';
import { Pagination } from '../../components/pagination/pagination';
import { FilmsService } from '../../services/get-films';

@Component({
  selector: 'app-home',
  imports: [Filters, Card, Pagination],

  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  public readonly filmService = inject(FilmsService);

  page: WritableSignal<number> = signal(1);
  films = this.filmService.getFilms(this.page);
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
}
