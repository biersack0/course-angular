import { Injectable } from '@angular/core';
import { Character } from './interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private characters: Character[] = [
    {
      name: 'Goku',
      power: 2000
    },
    {
      name: 'Vegeta',
      power: 2000
    }
  ];

  get allCharacters(){
    return [...this.characters]
  }

  constructor() { }

  addNewCharacter(character:Character){
    this.characters.push(character);
  }
}
