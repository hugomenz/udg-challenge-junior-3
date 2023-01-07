import { Component, OnInit } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
})
export class SizeSelectorComponent implements OnInit {
  constructor(private _size: SizeService) {}

  ngOnInit(): void {}

  changeSize(event: any) {
    this._size.changeSize(event.target.value);
  }
}
