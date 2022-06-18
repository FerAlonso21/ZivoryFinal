import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamComponent } from './listam.component';

describe('ListamComponent', () => {
  let component: ListamComponent;
  let fixture: ComponentFixture<ListamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
