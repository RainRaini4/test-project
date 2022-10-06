import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlidersComponent} from "./components/sliders/sliders.component";
import {CinemaAndTheatersComponent} from "./components/cinema-and-theaters/cinema-and-theaters.component";

const routes: Routes = [
  { path: 'sliders', component: SlidersComponent, title: 'Sliders'},
   { path: 'cinemaAndTheaters', component: CinemaAndTheatersComponent, title: 'Cinema And Theaters'},
  { path: '',   redirectTo: '/sliders', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
