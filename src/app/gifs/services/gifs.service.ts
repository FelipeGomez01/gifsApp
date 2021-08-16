import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService
{
  private _searchHistory: string[] = [];

  constructor() { }

  get searchHistory()
  {
    return [...this._searchHistory];
  }

  searchGifs(query: string)
  {
    this._searchHistory.unshift(query);

    console.log(this._searchHistory);
  }
}