import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutabilitetestComponent } from './immutabilitetest.component';

describe('ImmutabilitetestComponent', () => {
  let component: ImmutabilitetestComponent;
  let fixture: ComponentFixture<ImmutabilitetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmutabilitetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmutabilitetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
