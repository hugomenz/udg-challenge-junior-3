import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BucketStateService {
  isBucketActive: boolean = false;

  constructor() {}

  updateBucketState() {
    this.isBucketActive = !this.isBucketActive;

    this.isBucketActive ? console.log('actived!') : console.log('Inactive!');
  }
}
