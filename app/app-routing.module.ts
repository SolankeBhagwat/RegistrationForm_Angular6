import { NgModule, Component } from "@angular/core";
import { RouterModule, Router, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
  { path: "parent", component: ParentComponent },
  { path: "", component: RegistrationComponent },
  { path: "*", component: RegistrationComponent }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })]
})
export class AppRoutingModule {}
