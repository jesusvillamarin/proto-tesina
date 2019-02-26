import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesListPages } from './taxes-list.pages';

describe('TaxesListComponent', () => {
  let component: TaxesListPages;
  let fixture: ComponentFixture<TaxesListPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaxesListPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesListPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
