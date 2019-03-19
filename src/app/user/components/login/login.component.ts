import { Component, OnInit } from '@angular/core';
import { DatacommunicationService} from '../../../common/services/datacommunication.service'
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
  constructor(private router: Router,
  private dataService: DatacommunicationService) { }

  ngOnInit() {
    this.login = {
      email: '',
      password:''
    }
  }

  onSubmit() {
    window.localStorage.userInfo = JSON.stringify(this.login);
    this.dataService.changeMessage({loggedin:true});
    this.router.navigate(['/custom']);
  }

}
