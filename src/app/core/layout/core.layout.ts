import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './core.layout.html',
  styleUrls: ['./core.layout.scss']
})
export class CoreLayout implements OnInit {
  sidenavMode$: Observable<string>;
  user = {
    name: 'Juan Peréz'
  };

  payments = 1;

  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this.sidenavMode$ = this.mediaObserver.media$.pipe(
      map(mediaChange =>
        this.mediaObserver.isActive('lt-md') ? 'over' : 'side'
      )
    );
  }
}
