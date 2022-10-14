import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {

  @Input() pageNumber : number = 1
  @Input() disableButtons : boolean = false

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(
  ) {
  }

  public changePage(newPageNumber : number) : void {
    this.pageChanged.emit(newPageNumber)
  }

}
