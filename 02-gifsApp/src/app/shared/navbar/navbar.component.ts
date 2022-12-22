import { Component } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [],
})
export class NavbarComponent {
  // @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>  // get reference to #searchBox input
  searchBox = '';

  constructor(private gifService: GifService) {}

  search() {
    if (this.searchBox.trim() === '') return;

    this.gifService.searchGif(this.searchBox);
    this.searchBox = '';

    /* let valueToSearch = this.searchBox.nativeElement.value
    if(valueToSearch.trim() === '') return
    this.gifService.searchGif(valueToSearch)
    valueToSearch = '' */
  }
}
