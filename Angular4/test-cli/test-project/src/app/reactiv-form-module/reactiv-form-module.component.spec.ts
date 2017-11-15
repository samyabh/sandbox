import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivFormModuleComponent } from './reactiv-form-module.component';

describe('ReactivFormModuleComponent', () => {
  let component: ReactivFormModuleComponent;
  let fixture: ComponentFixture<ReactivFormModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivFormModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
