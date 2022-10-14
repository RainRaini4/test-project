import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {IResponse} from "../../../models/iresponse";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICell} from "../../../models/icell";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public detailData: ICell
  ) {
  }

  get commonName() : string {
    return this.detailData.CommonName ? this.detailData.CommonName : '-'
  }

  get chiefPosition() : string {
    return this.detailData.ChiefPosition ? new TitleCasePipe().transform(this.detailData.ChiefPosition) : 'Должность'
  }

  get chiefName() : string {
    return this.detailData.ChiefName ? this.detailData.ChiefName : '-'
  }

  get address() : string {
    return this.detailData.ObjectAddress && this.detailData.ObjectAddress.length > 0 && this.detailData.ObjectAddress[0].Address ?
      this.detailData.ObjectAddress[0].Address: '-'
  }

  get email() : string {
    return this.detailData.Email &&  this.detailData.Email.length > 0 && this.detailData.Email[0].Email ?
      this.detailData.Email[0].Email: '-'
  }

  get publicPhone() : string {
    return this.detailData.PublicPhone && this.detailData.PublicPhone.length > 0 && this.detailData.PublicPhone[0].PublicPhone ?
      '+7 ' + this.detailData.PublicPhone[0].PublicPhone : '-'
  }

  get webSite() : string {
    return this.detailData.WebSite ? this.detailData.WebSite : '-'
  }
}
