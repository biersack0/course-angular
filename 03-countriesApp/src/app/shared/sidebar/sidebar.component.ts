import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  searchBy: string[] = ['country', 'region', 'capital']

  constructor() {}

  get historial() {
    return ''
  }

  search(query: string) {
    console.log(query);
    
    // this.gifService.searchGif(query);
  }
}
