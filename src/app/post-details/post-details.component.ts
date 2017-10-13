import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';
import { User } from '../user';
import { Category } from '../category';
import { PostService } from "../post.service";

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  user: User;


  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window,
    private _router: Router,
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this._activatedRoute
        .data
        .subscribe((data: { post: Post }) => {
          this.post = data.post;
          this._window.scrollTo(0, 0);
        });

    this._activatedRoute
        .data
        .subscribe((data: { user: User }) => {
          this.user = data.user;
        });        
    
  }


  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts del autor indicado. Recuerda que para hacer esto necesitas         |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/users', pasando como parámetro el identificador del autor.       |
  |=========================================================================*/

    verPostsAutor(autor: User): void {
    this._router.navigate(['/posts/users',  autor.id]);
  }
  /*=========================================================================|
  | Yellow Path                                                              |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts de la categoría indicada. Recuerda que para hacer esto necesitas   |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/categories', pasando como parámetro el identificador de la       |
  | categoría.                                                               |
  |=========================================================================*/

  filtrarPorCategoria(categoria: Category):void{
    this._router.navigate(['/posts/categories',  categoria.id]);
  }
  
  //Queremos editar un post
  editarPost(): void {
      this._router.navigate(['/new-story', this.post.id]);
  }

  //Deshabilitamos el botón de Me Gusta si el usuario ya ha dado a me gusta
  yaMeGusta(likes, userId): boolean{
    let yaGusta = false;
    if(likes){
      likes.forEach((valor)=>{
        if(valor == userId){
          yaGusta = true;
        }
      });
    }
    return yaGusta;
  }

  //Sumamos un like al post
  sumarLike(){
    if(this.post.likes){
      this.post.likes.push(this.user.id);
    }else{
      this.post.likes = [this.user.id];
    }

    this._postService.editPost(this.post).subscribe((postNew: Post) => {
          this.post = postNew;
    }); 
  }


}
