import {Injectable} from '@angular/core';
import {} from "../interFace/ExpertGalleryItemInterface";

@Injectable({
  providedIn: 'root'
})
export class ItemServicesService {
  private itemsArr  = [
    {
      name: 'Eva ',
      surName:'Dothan',
      rating: 4,
      job: 'Marketing consultant',
      img: '/assets/img/Avatar(4).jpg',
    },
    {
      name: 'Jake',
      surName:'Smith',
      rating: 5,
      job: 'Frontend engineer',
      img: '/assets/img/Jake.jpg',
    },
    {
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },
    {
      name: 'Tomas',
      surName:'Pergival',
      rating: 4,
      job: 'Product manager',
      img: '/assets/img/Tomas.jpg',
    },
    {
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },{
      name: 'Isabella',
      surName:'Morgan',
      rating: 4,
      job: 'Psychologist',
      img: '/assets/img/Isabella.jpg',
    },

  ]

  constructor() {
  }

}
