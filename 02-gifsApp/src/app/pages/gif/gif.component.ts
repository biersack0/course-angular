import { Component } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: [],
})
export class GifComponent {
  constructor(private gifService: GifService) {}

  get gifSearched() {
    return this.gifService.results;
  }
}
