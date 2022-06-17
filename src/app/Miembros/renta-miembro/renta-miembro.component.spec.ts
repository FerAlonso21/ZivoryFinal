import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaMiembroComponent } from './renta-miembro.component';

describe('RentaMiembroComponent', () => {
  let component: RentaMiembroComponent;
  let fixture: ComponentFixture<RentaMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaMiembroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
