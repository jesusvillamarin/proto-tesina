import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brand-bar',
  templateUrl: './brand-bar.component.html',
  styleUrls: ['./brand-bar.component.scss']
})
export class BrandBarComponent implements OnInit {

  @Input() color: string = "white";
  @Input() position: string = "fixed";
  @Input() align: string = "start center";
  @Input() colorHeader: string = "white";

  constructor() {
  }

  ngOnInit() {
  }

}
