import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input()
  all: string;
  @Input()
  male: string;
  @Input()
  female: string;
  selectedRadioButtonValue: string = "All";
  @Output()
  OnSelectedRadioButton: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  OnRadioButtonSelectionChange() {
    this.OnSelectedRadioButton.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
