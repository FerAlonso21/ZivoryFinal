import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaVehiculoComponent } from './renta-vehiculo.component';

describe('RentaVehiculoComponent', () => {
  let component: RentaVehiculoComponent;
  let fixture: ComponentFixture<RentaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
