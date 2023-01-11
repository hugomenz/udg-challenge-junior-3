import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cell } from 'src/app/interfaces';
import { BucketStateService } from 'src/app/services/bucket-state.service';
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
  selectedCell: Cell | undefined = {} as Cell;

  cellInformation: Cell[] = [] as Cell[];

  //public cellInformation$ = new BehaviorSubject<Cell[]>([]);

  constructor(
    public _size: SizeService,
    public _color: ColorService,
    public _bucket: BucketStateService
  ) {}

  ngOnInit() {
    this.updateGridSize();
  }

  getBoxSize(size: number) {
    if (size === 8) {
      return 2;
    } else if (size === 12) {
      return 1.7;
    } else if (size === 16) {
      return 1.5;
    } else if (size === 32) {
      return 0.9;
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
      //this.cellInformation$.next(this.cellInformation);
    });
  }

  changeCellColor(event: any) {
    console.log(event.target.id);
    this.cellInformation.map((cell) => {
      if (cell.id === parseInt(event.target.id)) {
        cell.color = this._color.selectedColor;
      }
    });
  }

  fillAdjacentCells(event: any) {
    console.log(this.cellInformation);

    // get the id of the clicked cell
    const clickedId = parseInt(event.target.id);

    console.log(clickedId);

    // find the selected cell in the cellInformation array
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.selectedCell = this.cellInformation.find(
      (cell) => cell.id === clickedId
    )!;

    console.log(`Celda seleccionada: ${this.selectedCell}`);
    // get the color of the selected cell
    this.selectedColor = this.selectedCell.color;

    // create a queue to store the cells that need to be processed
    const queue = [clickedId];

    // create a set to store the processed cells
    const processed = new Set();

    while (queue.length > 0) {
      // get the id of the next cell to be processed
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const currentId = queue.shift()!;

      // check if the cell has already been processed
      if (processed.has(currentId)) {
        continue;
      }

      // mark the cell as processed
      processed.add(currentId);

      // get the current cell from the cellInformation array
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const currentCell = this.cellInformation.find(
        (cell) => cell.id === currentId
      )!;

      // check if the current cell has the same color as the selected cell
      if (currentCell.color === this.selectedColor) {
        // update the color of the current cell
        currentCell.color = this._color.selectedColor;

        // add the adjacent cells to the queue
        queue.push(currentId + 1);

        // assuming the cells are in a sequential grid-like structure
        queue.push(currentId - 1);
        queue.push(currentId + this.selectedSize);
        queue.push(currentId - this.selectedSize);
      }
    }

    console.log(this.cellInformation);
  }

  downloadImage() {}
}
