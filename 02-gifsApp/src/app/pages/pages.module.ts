import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifComponent } from './gif/gif.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GifComponent],
  imports: [CommonModule, SharedModule],
  exports: [GifComponent],
})
export class PagesModule {}
