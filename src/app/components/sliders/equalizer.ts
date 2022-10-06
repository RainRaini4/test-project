export class Equalizer {

  private lastIncrementedIndex: number;
  private lastTargetIndex: number;
  private readonly minValue: number;
  private readonly maxValue: number;
  private readonly values: number[];

  constructor(
    minValue: number,
    maxValue: number,
    initialValues: number[]
  ) {

    if ( minValue >= maxValue ) {

      throw( new Error( "Min value must be less than Max value." ) );

    }

    if ( initialValues.length === 1 ) {

      throw( new Error( "Initial values must have a length greater than 1." ) );

    }

    if ( this.sum( initialValues ) !== 0 ) {

      throw( new Error( "Initial values !== 0" ) );

    }

    this.minValue = minValue;
    this.maxValue = maxValue;
    this.values = initialValues;

    this.lastIncrementedIndex = -1;
    this.lastTargetIndex = -1;

  }

  public setValue( targetIndex: number, newValue: number ) : number[] {


    if ( targetIndex !== this.lastTargetIndex ) {

      this.lastTargetIndex = targetIndex;
      this.lastIncrementedIndex = targetIndex;

    }

    let currentValue = this.values[ targetIndex ];

    let nextValue = this.constrain( newValue );

    let delta = ( nextValue - currentValue );

    if ( ! delta ) {

      return( this.values.slice() );

    }

    this.values[ targetIndex ] = nextValue;

    let deltaToDistribute = Math.abs( delta );
    let step = ( delta > 0 )
      ? -1
      : 1
    ;

    while ( deltaToDistribute ) {

      if ( ++this.lastIncrementedIndex >= this.values.length ) {

        this.lastIncrementedIndex = 0;

      }

      if ( this.lastIncrementedIndex === this.lastTargetIndex ) continue;

      let currentValue = this.values[ this.lastIncrementedIndex ];

      let nextValue = this.constrain( currentValue + step );

      if ( nextValue !== currentValue ) {

        this.values[ this.lastIncrementedIndex ] = nextValue;
        deltaToDistribute--;

      }

    }

    return( this.values.slice() );

  }

  private constrain( value: number ) : number {

    value = Math.max( value, this.minValue );
    value = Math.min( value, this.maxValue );

    return( value );

  }

  private sum( values: number[] ) : number {

    let total = values.reduce(
      ( total, value ) => {

        return( total + value );

      }
    );

    return( total );

  }

}
