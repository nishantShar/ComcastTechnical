import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http, Response} from "@angular/http"
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor (private http:Http) {

  }
  GetData() : Observable<any> {
    
    return this.http.get("../data.json")
      .map((response: Response) => {
        return <any>response.json();
      })
  }
}
