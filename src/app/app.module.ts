import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustominputComponent } from './types/custominput/custominput.component';
import { config } from './types/config';
import { EmailComponent } from './types/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    CustominputComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   FormlyModule.forRoot(config),
   FormlyBootstrapModule,
   FormsModule
  ],
  providers: [],
  entryComponents:[AppComponent]
})
export class AppModule { 
  constructor(private injector:Injector){

  }
  ngDoBootstrap(){
    const element = createCustomElement(AppComponent,{injector:this.injector})
    customElements.define('child-component',element)
  }
}
