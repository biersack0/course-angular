import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroeComponent,
    ListComponent
  ]
})
export class HeroesModule { }
