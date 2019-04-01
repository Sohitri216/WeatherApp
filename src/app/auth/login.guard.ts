import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatacommunicationService } from '../common/services/datacommunication.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private dataService: DatacommunicationService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('isLoggedIn') === null || localStorage.getItem('isLoggedIn') === 'false') {
      return true;
    }
    console.log(this.dataService.getCurrentRouteState());
    if (this.dataService.getCurrentRouteState()) {
      this.router.navigate([this.dataService.getCurrentRouteState()]);
      this.dataService.changeMessage({
        loggedin: true
      })
      return false;
    }
    else {
      this.router.navigate(['/dashboard']);
      this.dataService.changeMessage({
        loggedin: true
      })
      return false;
    }
  }
}
