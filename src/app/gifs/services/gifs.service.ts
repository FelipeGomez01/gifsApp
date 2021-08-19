import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'src/config/constants.json';
import { SearchGifResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService
{
  private _searchHistory: string[] = [];
  public results: Gif[] = [];

  constructor(private http: HttpClient)
  {
    this._searchHistory = JSON.parse(localStorage.getItem('searchHistory')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get searchHistory()
  {
    return [...this._searchHistory];
  }

  searchGifs(query: string)
  {
    query = query.trim().toLowerCase();
    if(!this._searchHistory.includes(query))
    {
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.splice(0,10);

      localStorage.setItem('searchHistory',JSON.stringify(this._searchHistory));
    }

    const params = new HttpParams()
      .set('api_key',config.GIPHY_API_KEY)
      .set('q',query)
      .set('limit','10');

    this.http.get<SearchGifResponse>(`${config.API_URL}search`,{ params })
    .subscribe((resp) =>
    {
      this.results = resp.data;
      localStorage.setItem('results',JSON.stringify(resp.data));
    });
  }
}