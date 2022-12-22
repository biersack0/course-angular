import { DbzService } from './../dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: []
})
export class CharactersComponent {
  // @Input() characters: Character[] = []
  get characters(){
    return this.dbzService.allCharacters
  }

  constructor(
    private dbzService:DbzService
  ){

  }
}
