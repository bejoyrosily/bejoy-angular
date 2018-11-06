import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQtnComponent } from './delete-qtn.component';

describe('DeleteQtnComponent', () => {
  let component: DeleteQtnComponent;
  let fixture: ComponentFixture<DeleteQtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
