import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-newcollection',
  templateUrl: './newcollection.component.html',
  styleUrls: ['./newcollection.component.css']
})
export class NewcollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  

  scroll(el: HTMLElement){
    el.scrollIntoView({behavior:'smooth'})
  }

}
