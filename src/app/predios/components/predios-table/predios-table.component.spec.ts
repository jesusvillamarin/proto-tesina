import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediosTableComponent } from './predios-table.component';

describe('PrediosTableComponent', () => {
  let component: PrediosTableComponent;
  let fixture: ComponentFixture<PrediosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrediosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
