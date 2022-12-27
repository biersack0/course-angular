import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Country } from 'src/app/interfaces/country.interface';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [],
})
export class NavbarComponent {
  searchBox = '';
  suggestion = new Subject<string>();
  suggestionNotFound: boolean = false;
  suggestionCountries: Country[] = []

  constructor(
    private countryService:CountryService,
    private router: Router
  ) {
    this.suggestion.pipe(
        debounceTime(700),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.showSuggestions(term)
      });
  }
  
  search() {
    if (this.searchBox.trim() === '') return;
    const urlCurrent = this.router.url

    switch (urlCurrent) {
      case '/':
        this.countryService.getByCountry(this.searchBox)
        break;
      case '/region':
        this.countryService.getByRegion(this.searchBox)
        break;
      case '/capital':
        this.countryService.getByCapital(this.searchBox)
        break;
    
      default:
        this.countryService.getByCountry(this.searchBox)
        break;
    }

    this.searchBox = '';
  }

  showSuggestions(term: string){
    if (term.trim() === ''){
      this.suggestionNotFound = false
      this.suggestionCountries = []
      return
    };

    this.countryService.getSuggestions(term).subscribe({
      next: (res) => {
        this.suggestionCountries = res.slice(0,10)
        this.suggestionNotFound = false
      },
      error: (e) => {
        this.suggestionCountries = []
        this.suggestionNotFound = true
      }
    })
  }
}
