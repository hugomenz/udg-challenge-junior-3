import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  selectedColor = 'white';

  setColor(color: string) {
    this.selectedColor = color;
  }

  getColor() {
    return this.selectedColor;
  }
}
