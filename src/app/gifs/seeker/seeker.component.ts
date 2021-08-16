import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styles: [
  ]
})
export class SeekerComponent
{
  @ViewChild('txtSearch')
  txtSearch!: ElementRef<HTMLInputElement>;// el signo de admiración es un Non-null assertion

  constructor(private gifsService: GifsService)
  { }

  search()
  {
    const value = this.txtSearch.nativeElement.value;

    this.gifsService.searchGifs(value);

    this.txtSearch.nativeElement.value = '';
  }
}