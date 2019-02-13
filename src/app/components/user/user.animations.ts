import { trigger, transition, style, animate } from '@angular/animations';

const easeFn = '.3s cubic-bezier(.35,0,.25,1)';

export default [
  trigger('item', [
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      animate(easeFn, style({transform: 'translateX(0)', opacity: 1}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0)', opacity: 1}),
      animate(easeFn, style({transform: 'translateX(-100%)', opacity: 0}))
    ])
  ])
];