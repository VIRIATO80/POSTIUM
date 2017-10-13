import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

    /*=========================================================================|
    | Red Path                                                                 |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a un usuario, llame a la función 'getUserPosts()' del   |
    | servicio PostService. Recuerda mirar en los parámetros de la ruta, a ver |
    | qué encuentras.                                                          |
    |=========================================================================*/

    if(route.data.origen && route.data.origen == 'byUser'){
      return this._postService.getUserPosts(route.params.userId);
    }
    /*=========================================================================|
    | Yellow Path                                                              |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a una categoría, llame a la función 'getCategoryPosts()'|
    | del servicio PostService. Recuerda mirar en los parámetros de la ruta, a |
    | ver qué encuentras.                                                      |
    |=========================================================================*/
   if(route.data.origen && route.data.origen == 'byCategory'){
      return this._postService.getCategoryPosts(route.params.categoryId);
    }

    /*
      Búsqueda por aproximacion 
    */
    if(route.data.origen && route.data.origen == 'byTitle'){
      return this._postService.getPostByTitle(route.params.busqueda);
    }

    return this._postService.getPosts();
  }

}
