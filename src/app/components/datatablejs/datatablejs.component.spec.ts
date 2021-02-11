import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablejsComponent } from './datatablejs.component';

describe('DatatablejsComponent', () => {
  let component: DatatablejsComponent;
  let fixture: ComponentFixture<DatatablejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatablejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
