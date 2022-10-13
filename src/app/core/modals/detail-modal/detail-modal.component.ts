import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {IResponse} from "../../../models/iresponse";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICell} from "../../../models/icell";

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public detailData: ICell
  ) { }

}
