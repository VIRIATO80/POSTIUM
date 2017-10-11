import { TestBed, inject } from '@angular/core/testing';
import { PostFormComponent } from './post-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from "@angular/platform-browser";
import { UserService } from "../user.service";
import {  ReactiveFormsModule } from '@angular/forms';



describe('PostFormComponent: Testing del componente PostFormComponent', () => {

  let fixture;
  let componente;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule        
      ], 
      declarations: [
        PostFormComponent,
      ],
      providers: [
          UserService
      ]
    }).compileComponents();
      //Para instanciar componentes debemos usar la función createComponent
     fixture = TestBed.createComponent(PostFormComponent);
     componente = fixture.componentInstance;
  });

  it('debería instanciarse',() => {
    //Con expect indicamos el resultado que esperamos del test
    expect(componente).toBeTruthy();
  });

});


