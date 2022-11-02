import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, delay } from 'rxjs';

import { AdminService } from '../components/services/admin.service';
import { User } from '../components/user';

@Injectable({
  providedIn: 'root'
})
  
export class UserResolver implements Resolve<User> {
  
  constructor(
    private adminService: AdminService,
    private router: Router) {   
}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(2000),
      catchError( () => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}
