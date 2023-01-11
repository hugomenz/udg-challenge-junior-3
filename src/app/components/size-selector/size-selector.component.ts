import { Component, OnInit } from '@angular/core';
import { BucketStateService } from 'src/app/services/bucket-state.service';
import { SizeService } from 'src/app/services/size.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
})
export class SizeSelectorComponent implements OnInit {
  constructor(
    private _size: SizeService,
    private _bucket: BucketStateService,
    private _color: ColorService
  ) {}

  ngOnInit(): void {}

  changeSize(event: any) {
    this._bucket.isBucketActive = false;
    this._color.setColor('white');
    this._size.changeSize(event.target.value);
  }
}
