import { animation, animate, style } from '@angular/animations';

export const enterAnimation = animation([
  style({ opacity: 0 }),
  animate('150ms', style({ opacity: 1 }))
]);

export const leaveAnimation = animation([
  style({ opacity: 1 }),
  animate('150ms', style({ opacity: 0 }))
]);

export const modalEnterAnimation = animation([
  style({ 'margin-top': '-50px', opacity: 0}),
  animate('200ms', style({ 'margin-top': 0, opacity: 1 }))
]);

export const modalLeaveAnimation = animation([
  style({ 'margin-top': 0, opacity: 1 }),
  animate('200ms', style({ 'margin-top': '-50px', opacity: 0 }))
]);
