import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablehtmlComponent } from './datatablehtml.component';

describe('DatatablehtmlComponent', () => {
  let component: DatatablehtmlComponent;
  let fixture: ComponentFixture<DatatablehtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatablehtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablehtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
