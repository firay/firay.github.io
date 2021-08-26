import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class authServices {
  private counter: number = 0
  public successPost: boolean = false
  public timer: any
  public subSuccessPost = new Subject<boolean>()

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable<any> {
    return this.http.get<any>('/api/status.json')
  }

  putData(arg:number){
    this.fetchData().subscribe((resp)=>{
      resp.forEach((item:any)=>item.status = false)
      resp[arg].status = true
      this.http.put('api/status.json',resp).subscribe()
    })

  }

  getSuccessStatus (){
      this.timer = setInterval(()=>{
        this.fetchData().subscribe(resp=>{
          this.successPost = resp[this.counter].status;
          ++this.counter
          if (this.successPost){
            clearInterval(this.timer)
            this.subSuccessPost.next(this.successPost)
          }
        })
      },2000)
  }
  creatSomeRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
