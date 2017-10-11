import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post';

import { User } from '../user';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/
  
  //Evento de selección de un post
  @Output() postSeleccionado = new EventEmitter<Post>();

  //Evento de selección de un autor
  @Output() autorSeleccionado = new EventEmitter<User>();
 
 
 
  //Se lanza el evento para ver los post de un autor en concreto
  notificarClickAutor(autor: User): void {
    this.autorSeleccionado.emit(autor);
  }


  //Se lanza el evento para ver el detalle de un post
  verDetalle(post: Post): void {
    //Le pasamos al padre el post que hemos seleccionado para que lo maneje
    this.postSeleccionado.emit(post);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}
