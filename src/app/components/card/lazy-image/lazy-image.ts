import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  imports: [CommonModule],
  templateUrl: './lazy-image.html',
  styleUrl: './lazy-image.css',
})
export class LazyImage {
  @Input() imageUrl: string | undefined;
  imageLoaded = false;

  onLoad() {
    this.imageLoaded = true;
  }
}
