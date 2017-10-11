import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Post } from '../post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html'
})
export class NewStoryComponent implements OnDestroy {

  private _postSubscription: Subscription;

  post: Post;

  postedicion: Post;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router) {
     this._route.params.subscribe( params => this._gestionRuta(params['id']));
      
    }

  private _gestionRuta(id: number):void {
    
    //Si recibimos un id, entonces estamos editando un post
    if(id){
      this._postService.getPostDetails(id).forEach((elemento)=>{
        this.postedicion = elemento;
      });      
    }
  }


  ngOnDestroy(): void {
    this._unsubscribePostCreation();
  }

  createPost(post: Post): void {
    
    this._unsubscribePostCreation();
    if(post && post.id)
    {//Actualizamos
      this._postSubscription = this._postService
                                 .editPost(post)
                                 .subscribe(() => this._router.navigate(['/']));
    } else {
      //Creamos
      this._postSubscription = this._postService
                                 .createPost(post)
                                 .subscribe(() => this._router.navigate(['/']));      
    }             

  }

  private _unsubscribePostCreation(): void {
    if (this._postSubscription) {
      this._postSubscription.unsubscribe();
    }
  }

}
