import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent implements OnInit {
  selectedClass: string = 'selected';
  selected!: boolean;

  colorList: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'black',
    'gray',
    'white',
    'brown',
  ];

  constructor(public colorService: ColorService) {}

  ngOnInit(): void {}

  updateSelectedColor(event: any) {
    console.log(event.target.id);
    this.selected = !this.selected;
    this.colorService.setColor(event.target.id);
  }
}
