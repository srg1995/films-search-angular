import { Component, input, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyImage } from './lazy-image/lazy-image';

@Component({
  selector: 'app-card',
  imports: [RouterLink, LazyImage],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  readonly film = input<any>();
  protected hover: WritableSignal<boolean> = signal(false);
}
