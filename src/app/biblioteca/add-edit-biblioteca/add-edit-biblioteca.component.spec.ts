import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBibliotecaComponent } from './add-edit-biblioteca.component';

describe('AddEditBibliotecaComponent', () => {
  let component: AddEditBibliotecaComponent;
  let fixture: ComponentFixture<AddEditBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBibliotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
