import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.pages.html',
  styleUrls: ['./search-form.pages.scss']
})
export class SearchFormPages implements OnInit {
  indexTab = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  swipeEvent(event) {
    this.indexTab = event;
  }
  onSearchKey(event) {
    console.log(event);
    this.router.navigate(['/taxes']);
  }
  onSearchAccount(event) {
    console.log(event);
    this.router.navigate(['/taxes']);
  }
}
