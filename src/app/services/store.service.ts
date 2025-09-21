import { Injectable, signal, WritableSignal } from '@angular/core';
import { Genre } from './film.service';

@Injectable({ providedIn: 'root' })
export class FiltersStore {
  selectedFilters: WritableSignal<Genre[]> = signal([]);

  addFilter(filter: Genre) {
    if (!this.selectedFilters().some((f) => f.id === filter.id)) {
      this.selectedFilters.update((current) => [...current, filter]);
    }
  }
  removeFilter(filter: Genre) {
    this.selectedFilters.update((current) => current.filter((g) => g.id !== filter.id));
  }
  clearFilters() {
    this.selectedFilters.set([]);
  }
}
