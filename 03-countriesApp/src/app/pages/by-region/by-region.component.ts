import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: []
})
export class ByRegionComponent{
  regions = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActive:string  = ''

  constructor(
    private countryService:CountryService
  ){}

  getByRegion(region: string){
    this.regionActive = region
    this.countryService.getByRegion(region)
  }
}
