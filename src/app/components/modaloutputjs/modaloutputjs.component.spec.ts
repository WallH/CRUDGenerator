import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaloutputjsComponent } from './modaloutputjs.component';

describe('ModaloutputjsComponent', () => {
  let component: ModaloutputjsComponent;
  let fixture: ComponentFixture<ModaloutputjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaloutputjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaloutputjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
