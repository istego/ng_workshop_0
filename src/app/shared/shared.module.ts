import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WordsPipe, SearchPipe, FilterPipe } from './pipes';
import { ColorComponent } from './components';

@NgModule({
  declarations: [
    WordsPipe,
    SearchPipe,
    FilterPipe,
    ColorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    WordsPipe,
    SearchPipe,
    FilterPipe,
    ColorComponent
  ]
})
export class SharedModule {}
