import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray
} from "@angular/forms";
import { CustomeValidator } from "../Shared/CustomeValidator";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  title = "LicenseKeyGenerator";
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  validationMessages = {
    fullName: {
      required: "fullname is required",
      minlength: "min 2 characters required.",
      maxlength: "max 10 characters required."
    },
    emailGroup: {
      matchEmail: "Confirm email & email should match"
    },
    email: {
      required: "email is required",
      emailDomain: "gmail.com domain is required"
    },
    confirmEmail: {
      required: "Confirm email is required"
    },
    phone: {
      required: "phone is required"
    }
  };

  formErrors = {
    fullName: "",
    email: "",
    confirmEmail: "",
    emailGroup: "",
    phone: ""
  };

  ngOnInit() {
    this.employeeForm = this.AddEmployeeForm();

    this.employeeForm
      .get("ContactPreference")
      .valueChanges.subscribe((value: string) => {
        this.ContactPreferenceValidation(value);
      });

    this.employeeForm.valueChanges.subscribe(x => {
      this.logValidationErrors(this.employeeForm);
    });
  }

  private AddEmployeeForm(): FormGroup {
    return this.fb.group({
      fullName: [
        "",
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      ContactPreference: ["email"],
      emailGroup: this.fb.group(
        {
          email: [
            "",
            [Validators.required, CustomeValidator.EmailDomain("gmail.com")]
          ],
          confirmEmail: ["", [Validators.required]]
        },
        { validator: matchEmailDomain }
      ),
      phone: [""],
      skills: this.fb.array([this.AddSkillFormGroup()])
    });
  }

  AddSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: [""],
      ExperienceInYears: [""],
      Proficiency: [""]
    });
  }

  AddSkillButtonClick(): void {
    (<FormArray>this.employeeForm.get("skills")).controls.push(
      this.AddSkillFormGroup()
    );
  }

  RemoveSkillButtonClick(controlPosition: number): void {
    (<FormArray>this.employeeForm.get("skills")).removeAt(controlPosition);
  }

  ContactPreferenceValidation(value: string) {
    const control = this.employeeForm.get("phone");
    if (value === "phone") {
      control.setValidators([Validators.required]);
    } else {
      control.clearValidators();
    }
    control.updateValueAndValidity();
  }

  OnSubmit(): void {
    console.log(this.employeeForm.value);
  }

  logValidationErrors(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key: string) => {
      const abstractControl = formGroup.get(key);

      this.formErrors[key] = "";
      var msg = this.validationMessages[key];
      if (
        abstractControl &&
        !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)
      ) {
        for (const error in abstractControl.errors) {
          if (error) {
            this.formErrors[key] += msg[error] + " ";
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logValidationErrors(control);
          }
        }
      }
    });
  }
}

function matchEmailDomain(
  control: AbstractControl
): { [key: string]: any } | null {
  const email = control.get("email").value;
  const confirmEmail = control.get("confirmEmail").value;
  if (email === confirm) {
    return null;
  } else {
    return { matchEmail: true };
  }
}
