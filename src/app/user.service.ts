import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from './user';



@Injectable()
export class UserService {

  private readonly DEFAULT_USER = {
    id: 1,
    name: 'KeepCoder',
    username: 'keepcoder',
    email: 'keepcoder@postium.com',
    avatar: 'assets/images/keepcoder.jpg'
  };

  getDefaultUser(): User {
    return { ...this.DEFAULT_USER };
  }


  getUser(): Observable<User> {
    
    let observable=Observable.create(observer => {
        observer.next(this.getDefaultUser());
        observer.complete();//to show we are done with our processing
    })

    return observable;
  }

}
