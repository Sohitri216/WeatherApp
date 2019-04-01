import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatacommunicationService {

  private messageSource = new BehaviorSubject({ loggedin: false });
  private currentRoute = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(obj: any) {
    this.messageSource.next(obj);
  }

  getCurrentRoute(currentRoute) {
    this.currentRoute = currentRoute
  }

  setCurrentRouteState(state:string) {
    localStorage.setItem('currentState', state);
  }

  getCurrentRouteState() {
    return localStorage.getItem('currentState')
  }
}
