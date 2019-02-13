import { Component, Input } from '@angular/core';
import { User } from '../../models/User';
import animations from './user.animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  animations
})
export class UserComponent  {
  @Input() user: User;
}
