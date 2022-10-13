import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input() set pageNumber(pageNumber: number) {
    this.currPage = pageNumber
  }
  @Output() pageNumberChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() set disableButtons(disable: boolean) {
    this.disableBtns = disable
  }

  @Output() pageChanged: EventEmitter<string> = new EventEmitter<string>();

  public currPage : number = 1
  public disableBtns : boolean = false

  constructor(
  ) {
  }

  public changePage(newPageNumber : number) : void {
    this.pageNumberChange.emit(newPageNumber)
    this.pageChanged.emit('pageChanged')
  }

}
