import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/interfaces';
import { ColorService } from 'src/app/services/color.service';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  selectedSize: number = 8;
  selectedColor: string = 'white';

  cellInformation: Cell[] = [] as Cell[];

  constructor(private _size: SizeService, private _color: ColorService) {}

  ngOnInit() {
    this.updateGridSize();
  }

  getBoxSize(size: number) {
    if (size === 8) {
      return 2;
    } else if (size === 16) {
      return 1.5;
    } else if (size === 32) {
      return 1;
    } else {
      return 2;
    }
  }

  updateGridSize() {
    this._size.getSize().subscribe((size) => {
      this.selectedSize = parseInt(size);
      this.cellInformation = Array(this.selectedSize ** 2)
        .fill(null)
        .map((_, index) => ({ id: index, color: this.selectedColor }));
    });
  }

  changeCellColor(event: any) {
    console.log(event.target.id);
    this.cellInformation.map((x) => {
      if (x.id === parseInt(event.target.id)) {
        x.color = this._color.selectedColor;
      }
    });

    console.log(this.cellInformation);
  }
}
