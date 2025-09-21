import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyImage } from './lazy-image/lazy-image';

@Component({
  selector: 'app-card',
  imports: [RouterLink, LazyImage],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() film: any;
}
