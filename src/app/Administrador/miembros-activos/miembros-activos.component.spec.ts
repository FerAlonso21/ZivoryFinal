import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembrosActivosComponent } from './miembros-activos.component';

describe('MiembrosActivosComponent', () => {
  let component: MiembrosActivosComponent;
  let fixture: ComponentFixture<MiembrosActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiembrosActivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembrosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
