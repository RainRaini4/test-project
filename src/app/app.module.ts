import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SlidersComponent} from "./components/sliders/sliders.component";
import {MatSliderModule} from "@angular/material/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { CinemaAndTheatersComponent } from './components/cinema-and-theaters/cinema-and-theaters.component';
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreLoaderComponent } from './core/pre-loader/pre-loader.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DetailModalComponent } from './core/modals/detail-modal/detail-modal.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { PaginatorComponent } from './core/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidersComponent,
    CinemaAndTheatersComponent,
    PreLoaderComponent,
    DetailModalComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    NgbModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
