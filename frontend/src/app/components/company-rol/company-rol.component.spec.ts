import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRolComponent } from './company-rol.component';

describe('CompanyRolComponent', () => {
  let component: CompanyRolComponent;
  let fixture: ComponentFixture<CompanyRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
