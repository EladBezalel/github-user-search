import {Input, Output, Component, EventEmitter, OnInit, OnDestroy, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap, filter, debounceTime, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { User } from '../../models/User';
import { UserFacade } from '../../+state/user.facade';

@Component({
  selector: 'app-search',
  template: `
    <mat-card>
      <input
        class="input"
        matInput
        [placeholder]="placeholder"
        [formControl]="searchTerm">
    </mat-card>
  `,
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  searchTerm = new FormControl();
  @Input() placeholder: string = '';

  constructor(private facade: UserFacade, private elRef:ElementRef) {
    facade.watchQuery(this.searchTerm.valueChanges, elRef);
  }

}

