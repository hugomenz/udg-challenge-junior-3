import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { FormsModule } from '@angular/forms';
import { PaletteComponent } from './components/palette/palette.component';
import { SizeSelectorComponent } from './components/size-selector/size-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PaletteComponent,
    SizeSelectorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
