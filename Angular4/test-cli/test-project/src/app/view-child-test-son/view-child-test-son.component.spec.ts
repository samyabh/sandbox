import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildTestSonComponent } from './view-child-test-son.component';

describe('ViewChildTestSonComponent', () => {
  let component: ViewChildTestSonComponent;
  let fixture: ComponentFixture<ViewChildTestSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildTestSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildTestSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
