import { CountryService } from 'src/app/services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent {
  constructor(
    private countryService:CountryService
  ){}

  get countries(){
    return this.countryService.data
  }
}
