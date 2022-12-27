import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryComponent } from './by-country/by-country.component';
import { ByRegionComponent } from './by-region/by-region.component';
import { ByCapitalComponent } from './by-capital/by-capital.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByCountryComponent,
    ByRegionComponent,
    ByCapitalComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ByCountryComponent,
    ByRegionComponent,
    ByCapitalComponent,
    CountryDetailComponent
  ]
})
export class PagesModule { }
