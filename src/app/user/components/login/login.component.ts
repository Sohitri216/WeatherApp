import { Component, OnInit } from '@angular/core';
import { DatacommunicationService } from '../../../common/services/datacommunication.service';
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: {
    email: string,
    password: string
  }
  constructor(private router: Router, private dataService: DatacommunicationService) { }

  ngOnInit() {
    this.login = {
      email: '',
      password: ''
    }
  }

  onSubmit() {
    localStorage.setItem('userInfo', JSON.stringify(this.login));
    localStorage.setItem('isLoggedIn', 'true');
    this.dataService.changeMessage({
      loggedin: true
    })
    this.router.navigate(['/custom']);
  }

}
