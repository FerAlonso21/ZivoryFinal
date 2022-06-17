import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMiembroComponent } from './navbar-miembro.component';

describe('NavbarMiembroComponent', () => {
  let component: NavbarMiembroComponent;
  let fixture: ComponentFixture<NavbarMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMiembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
