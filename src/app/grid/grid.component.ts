import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  inputNumber: number = 8;
  numberArray: number[] = [];

  constructor() {}

  ngOnInit() {
    this.updateArray();
  }

  updateArray() {
    this.numberArray = Array(this.inputNumber ** 2).fill(null);
  }
}
