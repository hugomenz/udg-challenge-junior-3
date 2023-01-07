import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  inputNumber: number = 8;
  numberArray: number[] = [];
  selectedColor: string = 'white';

  constructor(private _size: SizeService, private _color: ColorService) {}

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

  updateColor() {
    this._color.getColor().subscribe((color) => (this.selectedColor = color));
  }
}
