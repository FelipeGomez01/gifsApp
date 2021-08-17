import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'src/config/constants.json';

@Injectable({
  providedIn: 'root'
})
export class GifsService
{
  private _searchHistory: string[] = [];
  public results: any[] = [];

  constructor(private http: HttpClient) { }

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
    }

    this.http.get(`${config.API_URL}gifs/search`,
    {
      params:{
        api_key: config.GIPHY_API_KEY,
        q: query,
        limit: 10
      }
    })
    .subscribe((resp: any) =>
    {
      this.results = resp.data;
    });
  }
}