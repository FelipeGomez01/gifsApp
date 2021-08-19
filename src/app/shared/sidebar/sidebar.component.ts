import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent
{

  constructor(private gifsService: GifsService)
  { }

  search(query: string)
  {
    this.gifsService.searchGifs(query);
  }

  get searchHistory()
  {
    return this.gifsService.searchHistory;
  }

}
