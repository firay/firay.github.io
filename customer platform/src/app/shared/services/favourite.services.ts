import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {ExpertGalleryItem} from "../interFace/ExpertGalleryItemInterface";

@Injectable({
  providedIn: 'root'
})
export class FavouriteServices {
  public favouriteItems: string | null = localStorage.getItem('favourite')
  public counter: number = 0
  public thisId!: string[]
  public favouriteItemsChange = new Subject<any>()
  public favouriteIdArr: any

  constructor() {
  }

  filterFav(arr: ExpertGalleryItem[], favArr: any) {
    console.log(favArr);
    if (favArr.length === 0) {
      return []
    }
    return arr.filter(item => [item.id].some(i => favArr.includes(i)))

  }

  getFavourite() {
    let upFavId = localStorage.getItem('favourite')
    return upFavId !== null ? JSON.parse(upFavId) : []
  }

  getCounter() {
    const favArr = this.favouriteItems !== null ? JSON.parse(this.favouriteItems) : []
    if (favArr.length === null) {
      return null
    }
    return favArr.length === 0? null:favArr.length
  }

  addFavourite(id: string) {
    let favourite: any = localStorage.getItem('favourite') || []
    if (typeof favourite === "string") {
      favourite = JSON.parse(favourite)
    }
    if (!favourite.includes(id)) {
      favourite.push(id)
      this.counter = favourite.length
      this.favouriteItemsChange.next(this.counter)
    }
    localStorage.setItem('favourite', JSON.stringify(favourite))
  }

  removeFavourite(id: string) {
    let favourite: any = localStorage.getItem('favourite') || []
    if (typeof favourite === 'string') {
      favourite = JSON.parse(favourite)

    }
    if (favourite.includes(id)) {
      let normalizeFavourite = favourite.filter((item: string) => item !== id)
      localStorage.setItem('favourite', JSON.stringify(normalizeFavourite))
      this.counter = normalizeFavourite.length
      this.favouriteItemsChange.next(this.counter)
    }
  }
}
