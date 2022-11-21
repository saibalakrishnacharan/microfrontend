import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custominput',
  templateUrl: './custominput.component.html',
  styleUrls: ['./custominput.component.scss']
})
export class CustominputComponent extends FieldType {

  constructor() { 
    super();
  }

}
