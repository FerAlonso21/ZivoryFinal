import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoVehiculoComponent } from './mantenimiento-vehiculo.component';

describe('MantenimientoVehiculoComponent', () => {
  let component: MantenimientoVehiculoComponent;
  let fixture: ComponentFixture<MantenimientoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
