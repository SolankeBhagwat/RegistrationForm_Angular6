import { Component, OnInit } from "@angular/core";
import { ParentService } from "./parent.service";
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  employeeCollection: any[];
  constructor(private parentService: ParentService) {
    this.employeeCollection = [
      {
        code: "Emp01",
        name: "Bhagwat",
        Gender: "male",
        dateOfBirth: "22:06:1992",
        salary: 122
      }
    ];

    parentService.GetEmployeeData().subscribe(x => {
      this.employeeCollection.push(x);
      console.log(x);
    });
  }

  selectedRadioButtonValue: string = "All";

  GetAllElmployeeCount(): number {
    return this.employeeCollection.length;
  }

  GetMaleEmployeeCount(): number {
    return this.employeeCollection.filter(x => x.Gender === "male").length;
  }
  GetFemaleEmployeeCount(): number {
    return this.employeeCollection.filter(x => x.Gender === "female").length;
  }

  FilterByGenderValue(selectedValue: string): void {
    this.selectedRadioButtonValue = selectedValue;
  }
  ngOnInit() {}
}
