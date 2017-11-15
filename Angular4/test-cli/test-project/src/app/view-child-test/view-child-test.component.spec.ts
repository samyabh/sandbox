import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildTestComponent } from './view-child-test.component';

describe('ViewChildTestComponent', () => {
  let component: ViewChildTestComponent;
  let fixture: ComponentFixture<ViewChildTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
