import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: []
})
export class ByCapitalComponent{
  constructor(
    private countryService:CountryService
  ){}
}
