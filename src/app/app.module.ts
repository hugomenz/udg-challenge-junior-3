import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { PaletteComponent } from './components/palette/palette.component';
import { SizeSelectorComponent } from './components/size-selector/size-selector.component';
import { FillButtonComponent } from './components/fill-button/fill-button.component';
import { BucketStateService } from './services/bucket-state.service';
import { SizeService } from './services/size.service';
import { ColorService } from './services/color.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PaletteComponent,
    SizeSelectorComponent,
    FillButtonComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [SizeService, ColorService, BucketStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
