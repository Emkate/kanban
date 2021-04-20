import { animation, animate, style } from '@angular/animations';

export const enterAnimation = animation([
  style({ opacity: 0 }),
  animate('150ms', style({ opacity: 1 }))
]);

export const leaveAnimation = animation([
  style({ opacity: 1 }),
  animate('150ms', style({ opacity: 0 }))
]);
