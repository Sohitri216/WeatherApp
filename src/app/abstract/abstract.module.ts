import { NgModule,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacommunicationService} from '../common/services/datacommunication.service'
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  providers: [DatacommunicationService],
  exports:[HeaderComponent]
})
export class AbstractModule { 

	static forRoot(): ModuleWithProviders{
		return {
            ngModule: AbstractModule,
            providers: []
        };
	}

}
