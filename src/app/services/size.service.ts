import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  private sizeSource = new BehaviorSubject<string>('8');
  currentSize = this.sizeSource.asObservable();

  constructor() {}

  changeSize(size: string) {
    this.sizeSource.next(size);
  }

  getSize() {
    return this.currentSize;
  }
}
