import { Component, Input } from '@angular/core';
import { DbzService } from '../dbz.service';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: []
})
export class AddCharacterComponent {
  @Input() character: Character = {
    name: '',
    power: 0
  }

  constructor(
    private dbzService:DbzService
  ){}

  // @Output() newCharacter: EventEmitter<Character> = new EventEmitter() // emit character to the parent element

  addCharacter(){
    // this.newCharacter.emit(this.character)
    this.dbzService.addNewCharacter(this.character)

    this.character = {
      name: '',
      power: 0
    }
  }
}
