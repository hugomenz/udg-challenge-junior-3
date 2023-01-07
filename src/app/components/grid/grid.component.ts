import { Component, OnInit } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  inputNumber: number = 8;
  numberArray: number[] = [];

  constructor(private _size: SizeService) {}

  ngOnInit() {
    this.updateArray();
  }

  updateArray() {
    this._size.getSize().subscribe((size) => {
      this.inputNumber = parseInt(size);
      console.log(this.inputNumber);
      this.numberArray = Array(this.inputNumber ** 2).fill(null);
    });
  }
}
