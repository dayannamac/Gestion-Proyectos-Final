import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarEliminarEntradaComponent } from './formulario-editar-eliminar-entrada.component';

describe('FormularioEditarEliminarEntradaComponent', () => {
  let component: FormularioEditarEliminarEntradaComponent;
  let fixture: ComponentFixture<FormularioEditarEliminarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEditarEliminarEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEditarEliminarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
