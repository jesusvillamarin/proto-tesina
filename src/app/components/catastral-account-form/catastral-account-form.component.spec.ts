import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatastralAccountFormComponent } from './catastral-account-form.component';

describe('CatastralAccountComponent', () => {
  let component: CatastralAccountFormComponent;
  let fixture: ComponentFixture<CatastralAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatastralAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatastralAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
