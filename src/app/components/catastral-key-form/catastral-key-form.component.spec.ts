import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatastralKeyFormComponent } from './catastral-key-form.component';

describe('CatastralKeyComponent', () => {
  let component: CatastralKeyFormComponent;
  let fixture: ComponentFixture<CatastralKeyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatastralKeyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatastralKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
