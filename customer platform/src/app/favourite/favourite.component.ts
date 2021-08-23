import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExpertGalleryItem} from "../shared/interFace/ExpertGalleryItemInterface";
import {GetCardsServices} from "../shared/services/getCards.services";
import {FavouriteServices} from "../shared/services/favourite.services";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit,OnDestroy {
  public favId: any =[]
  public showFavArr!:ExpertGalleryItem[]
  constructor(private getCard:GetCardsServices,
              private fav:FavouriteServices) { }

  ngOnInit(): void {
    this.favId = this.fav.getFavourite()
    this.showFavArr = this.fav.filterFav(this.getCard.expertArr, this.favId)
  }
  ngOnDestroy() {
  }

}
