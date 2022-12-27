import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'
  private params = new HttpParams().set('fields','name,capital,alpha2Code,flag,population,cca2')

  public data: Country[] = []

  constructor(
    private httpClient: HttpClient
  ) { }

  getByCountry(country: string){
    this.httpClient.get<Country[]>(`${this.apiUrl}/name/${country}`, {
      params: this.params
    })
    /* .pipe(         //print log in console 
      tap(console.log)
    ) */
    .subscribe({
      next: (v) => this.data = v,
      error: (e) => console.error(e)
    })
  }

  getByRegion(region: string){
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${region}`).subscribe({
      next: (v) => this.data = v,
      error: (e) => console.error(e)
    })
  }

  getByCapital(capital: string){
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${capital}`).subscribe({
      next: (v) => this.data = v,
      error: (e) => console.error(e)
    })
  }

  getByCode(code: string){
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
  }

  getSuggestions(term: string){
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`, {
      params: this.params
    })
  }
}
