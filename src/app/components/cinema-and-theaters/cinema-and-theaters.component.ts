import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {BehaviorSubject, forkJoin, Observable, Subject, Subscription} from "rxjs";
import {IResponse} from "../../models/iresponse";
import {MatDialog} from "@angular/material/dialog";
import {DetailModalComponent} from "../../core/modals/detail-modal/detail-modal.component";
import {ICell} from "../../models/icell";

@Component({
  selector: 'app-cinema-and-theaters',
  templateUrl: './cinema-and-theaters.component.html',
  styleUrls: ['./cinema-and-theaters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemaAndTheatersComponent implements OnInit, OnDestroy{

  public cinemas$: BehaviorSubject<IResponse[]> = new BehaviorSubject<IResponse[]>([])
  public theaters$: BehaviorSubject<IResponse[]> = new BehaviorSubject<IResponse[]>([])
  public showPreLoader$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  public disableBtns$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public currPage : number = 1


  private getData$: Subscription = new Subscription()

  constructor(
    private httpService : HttpService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getData$ = this.getData(1).subscribe({
      next: (vals) => {
        this.cinemas$.next(vals[0])
        this.theaters$.next(vals[1])
        this.showPreLoader$.next(false)
      }
    });
  }

  public loadNewPage(newPageNumber : number) : void {
    this.disableBtns$.next(true)
    this.getData$ = this.getData(newPageNumber).subscribe({
      next: (vals) => {
        this.currPage = newPageNumber
        this.cinemas$.next(vals[0])
        this.theaters$.next(vals[1])
        this.disableBtns$.next(false)
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

  ngOnDestroy(): void {
    this.getData$.unsubscribe()
  }



  private getData(currPage : number) : Observable<[IResponse[], IResponse[]]> {
    return forkJoin([
        this.httpService.getCinema(currPage),
        this.httpService.getTheaters(currPage)
      ]
    )
  }
}
