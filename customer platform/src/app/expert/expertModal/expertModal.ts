import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {ExpertGalleryItem} from "../../shared/interFace/ExpertGalleryItemInterface";
import {GetCardsServices} from "../../shared/services/getCards.services";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: "app-expert-modal",
  templateUrl: 'expertModal.html',
  styleUrls: ['./expertModal.scss'],
  animations: [
    trigger('modalState', [state('normal', style({
      'opacity': '0.8',
      'transform': 'rotate(0)'
    })),
      state('firstStep', style({
        'opacity': '1',
        'transform': 'translateX(5px)'
      })),
      state('secondStep', style({
        'opacity': '1',
        'transform': 'translateX(-5px)'
      })),
      state('finish', style({
        'opacity': '1',
        'transform': 'translateX(0px)'
      })),
      transition('normal <=> firstStep', animate(100)),
      transition('firstStep <=>secondStep', animate(100)),
      transition('secondStep <=> finish', animate(100))
    ])
  ]
})

export class ExpertModal implements OnInit, OnDestroy {
  @Input() expert?: ExpertGalleryItem | any
  public state: string = "normal"
  constructor(private getCard: GetCardsServices) {
  }

  animateModal() {
    setTimeout(() => {this.state = 'firstStep'}, 75)
    setTimeout(() => {this.state = 'secondStep'}, 150)
    setTimeout(() => {this.state = 'finish'}, 225)

  }

  ngOnInit() {
    this.animateModal()
  }

  closeModal() {
    setTimeout(() => {this.state = 'finish'}, 75)
    setTimeout(() => {this.state = 'secondStep'}, 150)
    setTimeout(() => {this.state = 'firstStep'}, 225)
    setTimeout(()=>{this.getCard.closeModal()},455)

  }

  ngOnDestroy() {

  }
}
