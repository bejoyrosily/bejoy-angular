import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtnEditComponent } from './qtn-edit.component';

describe('QtnEditComponent', () => {
  let component: QtnEditComponent;
  let fixture: ComponentFixture<QtnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
