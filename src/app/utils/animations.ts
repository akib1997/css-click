import { trigger, transition, style, animate, keyframes } from "@angular/animations";

export const boxAnimation =  trigger('boxAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('300ms', style({ opacity: 1, transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    animate('300ms', keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0, offset: 0.5 }),
      style({ opacity: 0, width: '0', offset: 1 })
    ]))
  ])
])
