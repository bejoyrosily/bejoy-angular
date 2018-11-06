import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtnsComponent } from './qtns.component';

describe('QtnsComponent', () => {
  let component: QtnsComponent;
  let fixture: ComponentFixture<QtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
