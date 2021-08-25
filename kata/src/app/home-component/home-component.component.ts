import { Component, OnInit } from '@angular/core';
import {authServices} from "../shared/services/auth.services";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private authServices:authServices) { }

  ngOnInit(): void {
    this.authServices.fetchData().subscribe(resp=>{
      console.log(resp);
    })
  }

}
