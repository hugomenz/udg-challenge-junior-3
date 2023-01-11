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

  //------
  // TODO: the grid could be a BehaviourSubject
  //       and we subscribe to the data
  //
  //public cellInformation$ = new BehaviorSubject<Cell[]>([]);
  //------

  constructor(
    public _size: SizeService,
    public _color: ColorService,
    public _bucket: BucketStateService
  ) {}

  ngOnInit() {
    this.updateGridSize();

    //------
    // TODO: we could subscribe to the data stream to get the grid state
    //
    //-----
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

      //------
      // TODO: the grid could be a BehaviourSubject
      //       and we subscribe to the data
      //       we should update the sellInformation$
      //
      //this.cellInformation$.next(this.cellInformation);
      //------
    });
  }

  changeCellColor(event: any) {
    this.cellInformation.map((cell) => {
      if (cell.id === parseInt(event.target.id)) {
        cell.color = this._color.selectedColor;
      }
    });
  }

  fillAdjacentCells(event: any) {
    const clickedId = parseInt(event.target.id);

    const queue = [clickedId]; // create a queue to store the cells that need to be processed
    const processed = new Set(); // create a set to store the processed cells

    // find the selected cell in the cellInformation array
    this.selectedCell = this.cellInformation.find(
      (cell) => cell.id === clickedId
    )!;

    // get the color of the selected cell
    this.selectedColor = this.selectedCell.color;

    while (queue.length > 0) {
      // get the id of the next cell to be processed
      const currentId = queue.shift()!;

      const currentCell = this.cellInformation.find(
        (cell) => cell.id === currentId
      );

      // check if the cell has already been processed
      if (processed.has(currentId) || !currentCell) {
        continue;
      }

      // mark the cell as processed
      processed.add(currentId);

      // check if the NEXT cell has the same color as the CURRENT cell
      if (currentCell.color === this.selectedColor) {
        // fill!
        currentCell.color = this._color.selectedColor;

        //------
        // TODO: The grid borders should be managed in a better way
        //       Maybe adding if conditions to the queue
        //------

        // add the adjacent cells to the queue
        queue.push(currentId + 1);
        queue.push(currentId - 1);
        queue.push(currentId + this.selectedSize);
        queue.push(currentId - this.selectedSize);
      }
    }

    console.log(this.cellInformation);
  }

  //------
  // TODO: Canva not implemented yet
  //
  //------
  downloadImage() {}
}
