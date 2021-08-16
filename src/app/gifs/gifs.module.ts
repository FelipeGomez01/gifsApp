import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultsComponent } from './results/results.component';
import { SeekerComponent } from './seeker/seeker.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultsComponent,
    SeekerComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
