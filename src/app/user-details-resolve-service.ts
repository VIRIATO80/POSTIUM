import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class UserDetailsResolveService implements Resolve<User> {

  constructor(private _userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this._userService.getUser();
  }

}