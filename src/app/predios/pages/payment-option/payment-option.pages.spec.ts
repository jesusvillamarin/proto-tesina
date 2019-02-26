import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOptionPages } from './payment-option.pages';

describe('PaymentOptionPages', () => {
  let component: PaymentOptionPages;
  let fixture: ComponentFixture<PaymentOptionPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentOptionPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOptionPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
