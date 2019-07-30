import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class DatacommunicationService {

  private messageSource = new BehaviorSubject({ loggedin: JSON.parse(localStorage.getItem('isLoggedIn')) });
  private currentRoute = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private router: Router) { }

  changeMessage(obj: any) {
    this.messageSource.next(obj);
  }

  getPreviousRoute(){
    return this.router.url;
  }

  // getCurrentRoute(currentRoute) {
  //   this.currentRoute = currentRoute
  // }

  // setCurrentRouteState(state:string) {
  //   localStorage.setItem('currentState', state);
  // }

  // getCurrentRouteState() {
  //   return localStorage.getItem('currentState')
  // }
}
