import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolLevelComponent } from './rol-level.component';

describe('RolLevelComponent', () => {
  let component: RolLevelComponent;
  let fixture: ComponentFixture<RolLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
