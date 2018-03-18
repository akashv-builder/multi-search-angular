import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavweatherSingleComponent } from './favweather-single.component';

describe('FavweatherSingleComponent', () => {
  let component: FavweatherSingleComponent;
  let fixture: ComponentFixture<FavweatherSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavweatherSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavweatherSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
