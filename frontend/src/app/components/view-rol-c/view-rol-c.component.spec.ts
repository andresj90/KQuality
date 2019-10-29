import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRolCComponent } from './view-rol-c.component';

describe('ViewRolCComponent', () => {
  let component: ViewRolCComponent;
  let fixture: ComponentFixture<ViewRolCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRolCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRolCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
