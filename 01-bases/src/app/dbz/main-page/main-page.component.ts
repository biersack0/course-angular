import { DbzService } from './../dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: []
})
export class MainPageComponent {
  constructor(
    private dbzService:DbzService
  ){}

  addNewCharacter(character: Character){
    this.dbzService.addNewCharacter(character)
  }

}
