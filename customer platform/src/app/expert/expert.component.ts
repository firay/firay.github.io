import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GetCardsServices} from "../shared/services/getCards.services";
import {Subscription} from "rxjs";
import {ExpertGalleryItem} from "../shared/interFace/ExpertGalleryItemInterface";
import {FavouriteServices} from "../shared/services/favourite.services";
import {authServices} from "../shared/services/auth.services";

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit, OnDestroy {
  public expert: ExpertGalleryItem[] | any
  public id!: string
  public showModal: any
  public isLoading:boolean = true
  public isAuth:boolean = false
  private changeShowModal!: Subscription
  private authSub!:Subscription

  constructor(private router: Router,
              private getCard: GetCardsServices,
              private favouriteServices:FavouriteServices,
              private authServices:authServices) {

  }

  ngOnInit() {
    this.id = this.router.routerState.snapshot.url.split('/expert/')[1]
    this.expert = this.getCard.expertArr
    if (this.expert.length !== 0) {
      this.isLoading = false
      this.expert = this.getCard.filterItem(this.id)
    }

    if (this.expert.length === 0) {
       this.getCard.getOneCard(this.id).subscribe(resp => {
         this.expert = [resp]
         setTimeout(()=>{this.isLoading = false},500)
      })
    }
    this.authSub = this.authServices.user.subscribe(resp =>{
      if (resp !==null)
      this.isAuth = resp.isRegistered
    })
    this.showModal = this.getCard.isOpen
    this.changeShowModal = this.getCard.changeShowModal.subscribe((flag: boolean) => {
      this.showModal = flag;
    })
  }

  addFavourite(id: string) {
    this.favouriteServices.addFavourite(id)
  }

  removeFavourite(id:string) {
    this.favouriteServices.removeFavourite(id)
  }

  getShowModal() {
    this.showModal = this.getCard.openModal()
  }

  ngOnDestroy() {
    this.changeShowModal.unsubscribe()
    this.authSub.unsubscribe()
  }
}
