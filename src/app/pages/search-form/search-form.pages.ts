import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.pages.html',
  styleUrls: ['./search-form.pages.scss']
})
export class SearchFormPages implements OnInit {

  indexTab = 0;

  constructor() { }

  ngOnInit() {
  }

  toRight(){
    this.indexTab = 1;
  }
  toLeft(){
    this.indexTab = 0;
  }

}
