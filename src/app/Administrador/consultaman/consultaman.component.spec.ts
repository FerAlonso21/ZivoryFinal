import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultamanComponent } from './consultaman.component';

describe('ConsultamanComponent', () => {
  let component: ConsultamanComponent;
  let fixture: ComponentFixture<ConsultamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultamanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
