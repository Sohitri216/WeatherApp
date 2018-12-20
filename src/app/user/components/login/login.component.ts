import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login : {
    email: string,
    password:string
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.login = {
      email: '',
      password:''
    }
  }

  onSubmit() {
      window.localStorage.userInfo = JSON.stringify(this.login);
    this.router.navigate(['/custom']);
  }

}
