import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  imports: [CommonModule],
  templateUrl: './lazy-image.html',
  styleUrl: './lazy-image.css',
})
export class LazyImage {
  readonly imageUrl = input<string>();
  imageLoaded = false;

  onLoad() {
    this.imageLoaded = true;
  }
}
