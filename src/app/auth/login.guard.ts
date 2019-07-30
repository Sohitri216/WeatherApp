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
    console.log('can activate',this.dataService.getPreviousRoute());
    if(this.dataService.getPreviousRoute()==='/' && localStorage.getItem('isLoggedIn') === 'true'){
      this.router.navigate(['/search']);
      return false
    }
    console.log('can activate',this.dataService.getPreviousRoute());
    return false;
    // return true;
    // if (this.router.url=='/search') {
    //   this.router.navigate([this.router.url]);
    //   this.dataService.changeMessage({
    //     loggedin: true
    //   })
    //   return false;
    // }
    // else {
    //   console.log('navigate to dashboard')
    //   this.router.navigate(['/dashboard']);
    //   this.dataService.changeMessage({
    //     loggedin: true
    //   })
    //   return true;
    // }
  }
}
