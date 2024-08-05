import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  @Input('title') title: any;
  @Output() childEmitter = new EventEmitter();
  name = ''

  ngOnChanges(changes: SimpleChanges): void {
      console.log("changes",this.title)
  }
  onSubmit() {
    console.log("dfghj",this.name);
    this.childEmitter.emit(this.name)
  }
}
