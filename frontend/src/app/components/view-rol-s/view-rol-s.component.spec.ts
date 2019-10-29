import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRolSComponent } from './view-rol-s.component';

describe('ViewRolSComponent', () => {
  let component: ViewRolSComponent;
  let fixture: ComponentFixture<ViewRolSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRolSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRolSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
