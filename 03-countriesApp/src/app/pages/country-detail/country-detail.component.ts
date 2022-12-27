import { Country } from './../../interfaces/country.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: []
})
export class CountryDetailComponent implements OnInit{
  country: Country[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService:CountryService
  ){
   /*  const code = this.activatedRoute.snapshot.paramMap.get('code')

    this.countryService.getByCode(code!).subscribe({
      next: (res) => {
        this.country = res
      },
      error: (e) => console.error(e)
    })
     */
  }

  ngOnInit() {
    this.activatedRoute.params
    .pipe(
      switchMap(({code})=>this.countryService.getByCode(code))
    )
    .subscribe(
      {
        next: (res) => {
          this.country = res
        },
        error: (e) => console.error('eror ',e),
        complete: ()=> console.log('ass')
        
      }
    )
  }
}
