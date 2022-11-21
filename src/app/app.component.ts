import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'child';
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'custom-input',
      props: {
        label: 'input label',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'email1',
      type: 'custom-email',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];
  constructor(){
    console.log("cons",this.model);
  }
  onSubmit(model :any) {
    console.log("dfghj",model);
  }
}
