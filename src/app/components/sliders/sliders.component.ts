import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {Equalizer} from "./equalizer";

interface Sliders {
  val1: number,
  val2: number,
  val3: number,
  val4: number
}

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlidersComponent {

  public sliders : Sliders = {
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0
  }
  public min : number = -100
  public max : number = 100

  private equalizer: Equalizer;

  constructor() {
    this.equalizer = new Equalizer(
      this.min,
      this.max,
      [ this.sliders.val1, this.sliders.val2, this.sliders.val3, this.sliders.val4 ]
    );
  }

  public getSum () : number {return this.sliders.val1 + this.sliders.val2 + this.sliders.val3 + this.sliders.val4}

  public onInputChange(event: MatSliderChange, sliderIndex: number) {
    if (event.value === null) return;
    let results = this.equalizer.setValue( sliderIndex, event.value );
    this.sliders.val1 = results[ 0 ];
    this.sliders.val2 = results[ 1 ];
    this.sliders.val3 = results[ 2 ];
    this.sliders.val4 = results[ 3 ];
  }

}
