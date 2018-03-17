import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavnewsSingleComponent } from './favnews-single.component';

describe('FavnewsSingleComponent', () => {
  let component: FavnewsSingleComponent;
  let fixture: ComponentFixture<FavnewsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavnewsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavnewsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
