import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Genre } from '../../services/film.service';
import { FiltersStore } from '../../services/store.service';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {
  constructor(public store: FiltersStore) {}
  @Input() genres: Genre[] | undefined;
  open: WritableSignal<boolean> = signal(false);

  getGenres(): void {
    console.log(this.genres);
  }
  toggleOpen() {
    this.open.update((value) => !value);
  }
  toggleFilter = (filter: Genre) => {
    console.log('llega', filter);
    const exists = this.store.selectedFilters().some((s) => s.id === filter.id);
    if (exists) {
      this.store.removeFilter(filter); // elimina el filtro del filtersStore
    } else {
      this.store.addFilter(filter); // añade el filtro al filtersStore
    }
    this.open.set(false);
    console.log(this.store.selectedFilters());
  };

  isSelected(id: number): boolean {
    return this.store.selectedFilters().some((s) => s.id === id);
  }
}
