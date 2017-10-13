import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {

  constructor(    private _router: Router){}

  hacerBusqueda(busqueda: string): void{
    this._router.navigate(['/posts/resultadosBusqueda',  busqueda]);
  }


  


 }
