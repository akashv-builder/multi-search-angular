import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavweatherComponent } from './favweather.component';

describe('FavweatherComponent', () => {
  let component: FavweatherComponent;
  let fixture: ComponentFixture<FavweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
