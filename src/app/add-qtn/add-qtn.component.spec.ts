import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQtnComponent } from './add-qtn.component';

describe('AddQtnComponent', () => {
  let component: AddQtnComponent;
  let fixture: ComponentFixture<AddQtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
