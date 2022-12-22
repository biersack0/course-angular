import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {
  heroes: string[] = ['batman','superman','flash']
  heroeDeleted: string = '';

  delete(){
    this.heroeDeleted = this.heroes.pop() || ''
  }
}
