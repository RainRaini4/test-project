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
export class CinemaAndTheatersComponent implements OnDestroy{

  public cinemas$: BehaviorSubject<IResponse[]> = new BehaviorSubject<IResponse[]>([])
  public theaters$: BehaviorSubject<IResponse[]> = new BehaviorSubject<IResponse[]>([])
  public showPreLoader : boolean = true
  public currPage : number = 1
  public disableBtns : boolean = false


  private getData$: Subscription

  constructor(
    private httpService : HttpService,
    private dialog: MatDialog,
    private cdref: ChangeDetectorRef,
  ) {
    this.showPreLoader = true
    this.getData$ = this.getData(1).subscribe({
      next: (vals) => {
        this.cinemas$.next(vals[0])
        this.theaters$.next(vals[1])
        this.showPreLoader = false
        this.cdref.detectChanges()
      }
    });
  }

  public loadNewPage() : void {
    this.disableBtns = true
    this.getData$ = this.getData(this.currPage).subscribe({
      next: (vals) => {
        this.cinemas$.next(vals[0])
        this.theaters$.next(vals[1])
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

  ngOnDestroy(): void {
    this.getData$.unsubscribe()
    this.cinemas$.unsubscribe()
    this.theaters$.unsubscribe()
  }






  private getData(currPage : number) : Observable<[IResponse[], IResponse[]]> {
    return forkJoin([
        this.httpService.getCinema(currPage),
        this.httpService.getTheaters(currPage)
      ]
    )
  }
}
