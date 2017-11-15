import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToBeTestedComponent } from './component-to-be-tested.component';

describe('ComponentToBeTestedComponent', () => {
  let component: ComponentToBeTestedComponent;
  let fixture: ComponentFixture<ComponentToBeTestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentToBeTestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentToBeTestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
