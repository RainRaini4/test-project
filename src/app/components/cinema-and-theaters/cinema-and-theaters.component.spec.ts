import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaAndTheatersComponent } from './cinema-and-theaters.component';

describe('CinemaAndTheatersComponent', () => {
  let component: CinemaAndTheatersComponent;
  let fixture: ComponentFixture<CinemaAndTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaAndTheatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaAndTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
