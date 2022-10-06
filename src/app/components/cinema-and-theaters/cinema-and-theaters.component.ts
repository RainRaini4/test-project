import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {forkJoin, Observable} from "rxjs";
import {IResponse} from "../../models/iresponse";
import {MatDialog} from "@angular/material/dialog";
import {DetailModalComponent} from "../../core/modals/detail-modal/detail-modal.component";
import {ICell} from "../../models/icell";

@Component({
  selector: 'app-cinema-and-theaters',
  templateUrl: './cinema-and-theaters.component.html',
  styleUrls: ['./cinema-and-theaters.component.scss']
})
export class CinemaAndTheatersComponent {

  public cinemas: IResponse[] = []
  public theaters: IResponse[] = []
  public showPreLoader = true
  public currPage : number = 1
  public disableBtns = false

  constructor(
    private httpService : HttpService,
    private dialog: MatDialog
  ) {
    this.showPreLoader = true
    this.getData().subscribe({
      next: (vals) => {
        console.log(vals)
        this.cinemas = vals[0]
        this.theaters = vals[1]
        this.showPreLoader = false
      }
    });
  }

  public loadMore() : void {
    this.disableBtns = true
    ++this.currPage
    this.getData().subscribe({
      next: (vals) => {
        this.cinemas = vals[0]
        this.theaters = vals[1]
        this.disableBtns = false
      }
    });
  }

  public loadPrev() : void {
    this.disableBtns = true
    --this.currPage
    this.getData().subscribe({
      next: (vals) => {
        this.cinemas = vals[0]
        this.theaters = vals[1]
        this.disableBtns = false
      }
    });
  }

  public openDetailModal(detailData : ICell) : void {
    this.dialog.open(DetailModalComponent, {
      data: detailData,
      minHeight: '20vh',
      minWidth: '50vw',
    });
  }






  private getData() : Observable<any> {
    return forkJoin([
        this.httpService.getCinema(this.currPage),
        this.httpService.getTheaters(this.currPage)
      ]
    )
  }
}
