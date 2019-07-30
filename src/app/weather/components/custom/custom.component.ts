import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { HightlightDirective } from '../../../common/directives/hightlight.directive';
import { StructuralDirective } from '../../../common/directives/structural.directive';
import { DatacommunicationService } from '../../../common/services/datacommunication.service';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  dummyArr: Array<string>;
  constructor() {
    // dataService.setCurrentRouteState(location.path())
  }

  ngOnInit() {
    this.dummyArr = ['The', 'day', 'is', 'cold'];
  }

}
