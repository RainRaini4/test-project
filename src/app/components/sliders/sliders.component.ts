import {Component} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {Equalizer} from "./equalizer";

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent {

  public sliders = {
    val1: 0,
    val2: 0,
    val3: 0,
  }
  public min = -100
  public max = 100

  private equalizer: Equalizer;

  constructor() {
    this.equalizer = new Equalizer(
      this.min,
      this.max,
      [ this.sliders.val1, this.sliders.val2, this.sliders.val3 ]
    );
  }

  public getSum () : number {return this.sliders.val1 + this.sliders.val2 + this.sliders.val3}

  public onInputChange(event: MatSliderChange, sliderIndex: number) {
    if (event.value === null) return;
    let results = this.equalizer.setValue( sliderIndex, event.value );
    this.sliders.val1 = results[ 0 ];
    this.sliders.val2 = results[ 1 ];
    this.sliders.val3 = results[ 2 ];
  }

}
