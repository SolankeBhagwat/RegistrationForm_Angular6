import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { AppRoutingModule } from "./app-routing.module";
import { RegistrationModule } from "./registration/registration.module";
import { RegistrationRoutingModule } from "./registration/registration-routing.module";
import { HoverFocusDirective } from "./Shared/HoverFocus";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    HoverFocusDirective,
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RegistrationRoutingModule,
    AppRoutingModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
