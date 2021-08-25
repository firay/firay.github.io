import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class authServices {
  constructor(private http: HttpClient) {

  }
  fetchData() {
    return this.http.get<any>(`/api/?x-api-key=syaNs11gHB9pev48g5Zrt5p5O4cKX7yU1bUDj7F5`)
  }

}
