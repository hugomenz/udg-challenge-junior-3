import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { PaletteComponent } from './components/palette/palette.component';
import { SizeSelectorComponent } from './components/size-selector/size-selector.component';
import { FillButtonComponent } from './components/fill-button/fill-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PaletteComponent,
    SizeSelectorComponent,
    FillButtonComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
