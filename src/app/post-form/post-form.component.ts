import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnChanges {


  @Input() post;
  
  postForm: FormGroup;

  ngOnChanges(changes: SimpleChanges) {
    if(changes.post.currentValue){
     this.postForm = this._formBuilder.group({
       title: changes.post.currentValue.title,
       intro: changes.post.currentValue.intro,
       body: changes.post.currentValue.body
     });
    }

  }
  
  
  @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder) {
      this.createForm();
    }

  private createForm() {

    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Define para este FormGroup los objetos FormControl correspondientes a    |
    | las propiedades 'title', 'intro' y 'body' de los posts. Los dos primeros |
    | son obligatorios, así que recuerda añadir el validador oportuno.         |
    |=========================================================================*/

    this.postForm = this._formBuilder.group({
      title:['', Validators.required],
      intro: ['', Validators.required],
      body: ''
    });
  }



  emitPostSubmitted(): void {
    const post: Post = this.postForm.value;

    //Esto es una ñapa porque no funciona el editar bien
    if(this.post){
      post.id = this.post.id;  
    }
    post.likes = [];
    post.categories = [];
    post.author = this._userService.getDefaultUser();
    post.publicationDate = Date.now();
    this.postSubmitted.emit(post);
  }

}
