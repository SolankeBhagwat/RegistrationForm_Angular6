import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
  exports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule {}
