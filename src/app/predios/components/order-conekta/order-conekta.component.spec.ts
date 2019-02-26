import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConektaComponent } from './order-conekta.component';

describe('OrderConektaComponent', () => {
  let component: OrderConektaComponent;
  let fixture: ComponentFixture<OrderConektaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConektaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
