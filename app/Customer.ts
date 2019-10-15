class ICustomer {
  Id: string;
  addData(): boolean {
    return true;
  }
}

export class Customer implements ICustomer {
  addData(): boolean {
    throw new Error("Method not implemented.");
  }
  Id: string;
  private firstName;
  public name;
  constructor() {
    this.firstName = "Bhagwat";
    this.name = "Bhagwat Solanke";
  }
  public GetName() {
    return this.name;
  }
  private GetFirstName() {
    return this.firstName;
  }
}
