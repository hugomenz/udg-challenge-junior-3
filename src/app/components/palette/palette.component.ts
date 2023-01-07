import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
})
export class PaletteComponent implements OnInit {
  colorList = [
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

  constructor(private _colorService: ColorService) {}

  ngOnInit(): void {}

  updateSelectedColor(event: any) {
    console.log(event.target.id);
    this._colorService.setColor(event.target.id);
  }
}
