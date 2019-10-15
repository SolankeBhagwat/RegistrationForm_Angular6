import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RegistrationComponent } from "./registration.component";
import { SharedModule } from "../Shared/SharedModule";
import { Validators } from "@angular/forms";

describe("RegistrationComponent", () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [RegistrationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it("email field valid", () => {
    let emailErrors = {};
    let email = component.employeeForm.controls["emailGroup"].get("email");
    emailErrors = email.errors || {};
    expect(emailErrors["required"]).toBeTruthy();
  });

  it("email domain should be gmail.com", () => {
    let email = component.employeeForm.controls["emailGroup"].get("email");
    email.setValue("bsolanke@gmail.com");
    expect(email.errors).toBeNull();
  });

  it("check form validity", () => {
    expect(component.employeeForm.valid).toBeFalsy();
    component.employeeForm.controls["fullName"].setValue("bhagw");
    component.employeeForm.controls["emailGroup"]
      .get("email")
      .setValue("bhagwat@gmail.com");
    component.employeeForm.controls["emailGroup"]
      .get("confirmEmail")
      .setValue("bhagwat@gmail.com");

    component.OnSubmit();
    expect(component.employeeForm.valid).toEqual(true);
  });
});
