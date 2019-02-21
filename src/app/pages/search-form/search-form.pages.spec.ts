import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormPages } from './search-form.pages';

describe('SearchFormPages', () => {
  let component: SearchFormPages;
  let fixture: ComponentFixture<SearchFormPages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFormPages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
