import { Component, OnInit } from '@angular/core';
import { BucketStateService } from 'src/app/services/bucket-state.service';

@Component({
  selector: 'app-fill-button',
  templateUrl: './fill-button.component.html',
  styleUrls: ['./fill-button.component.scss'],
})
export class FillButtonComponent implements OnInit {
  constructor(public _bucket: BucketStateService) {}

  ngOnInit(): void {}
  toggleBucket() {
    this._bucket.updateBucketState();
  }
}
