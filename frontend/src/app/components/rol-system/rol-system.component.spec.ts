import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolSystemComponent } from './rol-system.component';

describe('RolSystemComponent', () => {
  let component: RolSystemComponent;
  let fixture: ComponentFixture<RolSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
