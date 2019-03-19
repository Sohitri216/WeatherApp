import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DatacommunicationService } from '../../../common/services/datacommunication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getStatus: {};
  isLoginPage: boolean;
  constructor(private router: Router,
    private dataService: DatacommunicationService,
    location: Location) {
    router.events.subscribe(val => {
      (location.path() !== '/login') ? this.isLoginPage = false : this.isLoginPage = true;

    })
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.getStatus = message;
    }
    )
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  logoutUser() {
    this.router.navigateByUrl('/login');
    this.dataService.changeMessage({loggedin:false});
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}
