import { Component } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private gifService: GifService) {}

  get historial() {
    return this.gifService.historial;
  }

  search(query: string) {
    this.gifService.searchGif(query);
  }
}
