import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration.component";
const routes: Routes = [
  { path: "registration", component: RegistrationComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {}
