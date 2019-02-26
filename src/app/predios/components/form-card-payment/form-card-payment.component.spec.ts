import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCardPaymentComponent } from './form-card-payment.component';

describe('FormCardPaymentComponent', () => {
  let component: FormCardPaymentComponent;
  let fixture: ComponentFixture<FormCardPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCardPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCardPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
