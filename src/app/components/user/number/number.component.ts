import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.less']
})
export class NumberComponent {
  @Input() title: string;
  @Input() value: number;
}
