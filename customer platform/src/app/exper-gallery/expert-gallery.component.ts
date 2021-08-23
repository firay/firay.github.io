import {Component, OnInit} from '@angular/core';
import {GetCardsServices} from "../shared/services/getCards.services";

@Component({
  selector: 'app-expert-gallery',
  templateUrl: './expert-gallery.component.html',
  styleUrls: ['./expert-gallery.component.scss']
})
export class ExpertGalleryComponent implements OnInit {

  public itemArr: any = []
  public loading: boolean = true


  constructor(private getCard: GetCardsServices,) {
  }

  ngOnInit(): void {
    this.itemArr = this.getCard.expertArr
    if (this.itemArr.length > 0) {
      this.loading = false
    }
    if (this.itemArr.length === 0) {
      this.getCard.fetchCards().subscribe(resp => {
        this.itemArr = resp
        this.getCard.expertArr = resp
        setTimeout(() => {this.loading = false}, 500)
      })
    }
  }
}
