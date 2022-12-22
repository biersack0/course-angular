import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey = 'vxiYF2XFCOSsBd6HS37kADGFNnVTVk9r';
  private servicioUrl = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  results: Gif[] = [];

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial') as string);
    }

    if (localStorage.getItem('lastSearch')) {
      this.results = JSON.parse(localStorage.getItem('lastSearch') as string);
    }
  }

  get historial() {
    return [...this._historial];
  }

  searchGif(query: string) {
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.httpClient
      .get<SearchGIFResponse>(`${this.servicioUrl}/search`, {
        params: {
          api_key: this.apiKey,
          q: query,
          limit: 10,
        },
      })
      .subscribe((res) => {
        this.results = res.data;
        localStorage.setItem('lastSearch', JSON.stringify(this.results));
      });
  }
}
