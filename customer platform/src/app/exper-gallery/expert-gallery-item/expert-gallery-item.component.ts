import {Component, Input, OnInit} from '@angular/core';
import {ItemServicesService} from "../../shared/services/item-services.service";

@Component({
  selector: 'app-expert-gallery-item',
  templateUrl: './expert-gallery-item.component.html',
  styleUrls: ['./expert-gallery-item.component.scss','../../shared/svg/star-svg/star.scss']
})
export class ExpertGalleryItemComponent implements OnInit {
  @Input() item: any

  constructor(private galleryItemServices: ItemServicesService) {
  }

  starGetFill(e:any){
    console.log(e);
  }

  ngOnInit(): void {
  }

}
