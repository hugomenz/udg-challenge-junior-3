import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private color = new BehaviorSubject<string>('red');
  selectedColor = this.color.asObservable();

  setColor(color: string) {
    this.color.next(color);
  }

  getColor() {
    return this.selectedColor;
  }
}
