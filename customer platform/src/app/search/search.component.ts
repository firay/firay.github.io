import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GetCardsServices} from "../shared/services/getCards.services";
import {ExpertGalleryItem} from "../shared/interFace/ExpertGalleryItemInterface";
import {Subscription} from "rxjs";
import {SearchServices} from "../shared/services/search.services";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../form/form.scss', '/search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public isLoading:boolean = true
  public itemArr: ExpertGalleryItem[] = []
  private getItemSub = new Subscription()
  public optionsArr: { name: string }[] = []
  public loading = false
  private getOptionsSub = new Subscription()
  @ViewChild('professionAspectsContainer') professionAspectsContainer: ElementRef | any
  @ViewChild('name') name: ElementRef | any
  @ViewChild('profession') profession: ElementRef | any
  @ViewChild('aspects') aspects: ElementRef | any
  @ViewChild('starRate') starRate: ElementRef | any
  @ViewChild('priceRate') priceRate: ElementRef | any

  constructor(private getCard: GetCardsServices,
              private searchServices: SearchServices) {
  }

  ngOnInit(): void {
    if (this.getCard.expertArr.length === 0) {
      this.getItemSub = this.getCard.fetchCards().subscribe(resp => {
        this.itemArr = resp
        this.getCard.expertArr = resp
        setTimeout(()=>{this.isLoading = false}, 500)
      })
    }
    if (this.getCard.expertArr.length >0){
      this.itemArr = this.getCard.expertArr
      this.isLoading = false
    }
  }

  loadAspectsValue(e: any) {
    if (e.currentTarget.value.toLowerCase() === "search") {
      return
    }
    this.loading = true
    this.getOptionsSub = this.searchServices.getAspects(e.currentTarget.value).subscribe(res => {
      this.optionsArr = res
      this.searchServices.removeAllItem(this.professionAspectsContainer)
      this.loading = false
    })
  }

  showAspects(e: any) {
    let currentValue = e.currentTarget.value
    this.searchServices.showAspects(currentValue, this.professionAspectsContainer)

  }

  removeOneItem(e: any) {
    this.searchServices.removeOneItem(e)
  }

  filterArr() {
    let name = this.name.nativeElement.value
    let starRate = +this.starRate.nativeElement.value
    let priceRate = +this.priceRate.nativeElement.value
    let profession = ''
    let professionAspects = [...this.professionAspectsContainer.nativeElement.children].map((item) => item.textContent)
    this.itemArr= this.searchServices.filterArr(this.getCard.expertArr, name, starRate, priceRate, profession, professionAspects)
  }

  ngOnDestroy() {
    if (this.getItemSub) {
      this.getItemSub.unsubscribe()
    }
    this.getOptionsSub ? this.getOptionsSub.unsubscribe() : null
  }
}
