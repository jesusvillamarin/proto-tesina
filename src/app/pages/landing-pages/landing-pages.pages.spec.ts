import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPages } from './landing-pages.pages';

describe('LandingPagesComponent', () => {
  let component: LandingPages;
  let fixture: ComponentFixture<LandingPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
