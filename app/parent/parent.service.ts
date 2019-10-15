import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ParentService {
  constructor(private http: HttpClient) {}
  GetEmployeeData(): Observable<any> {
    return this.http.get("assets/db.json").pipe(
      map(function(res) {
        return res;
      })
    );
  }
}
