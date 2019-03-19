import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DatacommunicationService} from '../common/services/datacommunication.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [DatacommunicationService],
   exports: [
        LoginComponent      
    ],
})
export class UserModule { 


}
