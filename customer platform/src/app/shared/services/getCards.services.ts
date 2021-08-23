import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetCardsServices {
  constructor(private http: HttpClient) {
  }
  public fetchData = false
  public expertArr: any = []
  public isOpen = false
  public changeShowModal = new Subject<boolean>()

  openModal() {
    this.isOpen = true
    this.changeShowModal.next(this.isOpen)
    return this.isOpen
  }

  closeModal() {
      this.isOpen = false
      this.changeShowModal.next(this.isOpen)
      return this.isOpen
  }

  fetchCards() {
    return this.http.get('https://firay-5ffdf-default-rtdb.firebaseio.com/expert.json')
      .pipe(map((resp: { [name: string]: any }) => {
          const normalizeData = []
          for (let key in resp) {
            resp.id = key
            normalizeData.push({...resp[key], id: key})
          }
          return normalizeData
        })
      )
  }

  getOneCard(id: string) {
    return this.http.get(`https://firay-5ffdf-default-rtdb.firebaseio.com/expert/${id}.json`)
      .pipe(map((resp: { [name: string]: any }) => {
          const normalizeData = {...resp, id: id}
          return normalizeData
        })
      )
  }

  filterItem(id: string): any {
    if (this.expertArr.length > 0) {
      let normalize = this.expertArr.filter((item: any) => item.id === id)
      return normalize
    }
  }
}
