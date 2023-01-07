import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms';
import { PaletteComponent } from './palette/palette.component';

@NgModule({
  declarations: [AppComponent, GridComponent, PaletteComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
