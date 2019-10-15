import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration.component";
import { SharedModule } from "../Shared/SharedModule";

@NgModule({
  imports: [SharedModule],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {}
