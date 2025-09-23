import { Component, signal, WritableSignal, input } from '@angular/core';
import { FiltersStore } from '../../services/store.service';
import { Genre } from '../../models/Genre.model';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {
  constructor(public store: FiltersStore) {}
  readonly genres = input<Genre[]>();
  open: WritableSignal<boolean> = signal(false);

  toggleOpen() {
    this.open.update((value) => !value);
  }
  toggleFilter = (filter: Genre) => {
    const exists = this.store.selectedFilters().some((s) => s.id === filter.id);
    if (exists) {
      this.store.removeFilter(filter); // elimina el filtro del filtersStore
    } else {
      this.store.addFilter(filter); // añade el filtro al filtersStore
    }
    this.open.set(false);
  };

  isSelected(id: number): boolean {
    return this.store.selectedFilters().some((s) => s.id === id);
  }
}
