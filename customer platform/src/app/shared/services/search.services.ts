import {ElementRef, Injectable} from "@angular/core";
import {FormBecomeServices} from "./formBecome.services";
import {ExpertGalleryItem} from "../interFace/ExpertGalleryItemInterface";

@Injectable({
  providedIn: "root"
})

export class SearchServices {
  constructor(private becomeService: FormBecomeServices) {
  }

  public showAspectsArr: string[] = []

  getAspects(value: string) {
    return this.becomeService.updateData(value)
  }

  showAspects(value: string, container: ElementRef) {
    if (value.toLowerCase() === "search") {
      return
    }
    if (!this.showAspectsArr.includes(value)) {
      this.showAspectsArr.push(value)
      container.nativeElement.insertAdjacentHTML("afterbegin", `<span class="professionAspects">${value}</span>`)
    }
  }

  removeAllItem(container: ElementRef) {
    if (container.nativeElement.children.length !== 0) {
      [...container.nativeElement.children].forEach(item => item.remove())
    }
    this.showAspectsArr = []
  }

  removeOneItem(e: any) {
    if (e.target.tagName.toLowerCase() === 'span') {
      e.target.remove()
      const normalizeArr = this.showAspectsArr.filter(item => item === e.target.value)
      this.showAspectsArr = normalizeArr
    }
  }

  filterArr(itemsArr: ExpertGalleryItem[], name: string, starRate: number, priceRate: number, profession: string, professionAspects: any) {
    let normalizeArr: ExpertGalleryItem[]
    if (professionAspects.length === 0) {
      professionAspects = []
    }
    let filterArr = itemsArr.filter((item) => item.name.includes(name) && item.starRate >= starRate && item.profession.toLowerCase().includes(profession.toLowerCase()))
    normalizeArr = filterArr
    if (priceRate !== 0) {
      const filterPrice = filterArr.filter(item => +item.rate <= priceRate)
      normalizeArr = filterPrice
    }
    if (professionAspects.length > 0) {
      const filterArr = normalizeArr.filter(item => item.professionAspects.some(r => professionAspects.indexOf(r) >= 0))
      normalizeArr = filterArr
    }
    return normalizeArr
  }
}
