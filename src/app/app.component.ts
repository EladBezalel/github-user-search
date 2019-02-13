import {Component, ElementRef, OnInit} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {untilViewDestroyed} from './utils/untilDestroyed';

import { UserFacade } from './+state/user.facade';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  cols$ : Observable<number>;

  constructor(private facade: UserFacade, private elRef: ElementRef, private mediaObserver: MediaObserver) {
    this.cols$ = this.mediaObserver.media$.pipe(
        untilViewDestroyed(this.elRef),
        map(({mqAlias}: MediaChange) => {
          return mqAlias !== 'lg' ? 1 : 2;
        }),
    );
  }
}
