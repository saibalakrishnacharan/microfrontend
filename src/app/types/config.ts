import { CustominputComponent } from "./custominput/custominput.component";
import { EmailComponent } from "./email/email.component";


//configuration for Formly module
export const config: any = {
  types: [
    { name: 'custom-input', component: CustominputComponent },
    { name: 'custom-email', component: EmailComponent },
  ]
  
};
