import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: []
})
export class ByCountryComponent{
  constructor(
    private countryService:CountryService
  ){}
}
