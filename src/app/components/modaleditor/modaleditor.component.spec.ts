import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleditorComponent } from './modaleditor.component';

describe('ModaleditorComponent', () => {
  let component: ModaleditorComponent;
  let fixture: ComponentFixture<ModaleditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
