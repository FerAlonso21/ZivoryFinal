import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosDisponiblesComponent } from './autos-disponibles.component';

describe('AutosDisponiblesComponent', () => {
  let component: AutosDisponiblesComponent;
  let fixture: ComponentFixture<AutosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
