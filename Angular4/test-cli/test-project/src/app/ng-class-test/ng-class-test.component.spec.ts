import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassTestComponent } from './ng-class-test.component';

describe('NgClassTestComponent', () => {
  let component: NgClassTestComponent;
  let fixture: ComponentFixture<NgClassTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
