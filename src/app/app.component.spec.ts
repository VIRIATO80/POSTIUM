import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from "@angular/platform-browser";
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';


describe('AppComponent: Testing del componente AppComponent', () => {

  let fixture;
  let componente;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ], 
      declarations: [
        AppComponent,
        HeaderBarComponent,
        SearchBoxComponent
      ],
    }).compileComponents();
      //Para instanciar componentes debemos usar la función createComponent
     fixture = TestBed.createComponent(AppComponent);
     componente = fixture.componentInstance;
  });

  it('debería instanciarse',() => {
    //Con expect indicamos el resultado que esperamos del test
    expect(componente).toBeTruthy();
  });
});