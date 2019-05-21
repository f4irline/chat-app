import {
    animate,
    style,
    trigger,
    transition
} from '@angular/animations';

export const Fade = trigger('fade', [
    transition('void => *', [
        style({opacity: 0}),
        animate(250),
    ]),

    transition('* => void', [
        animate(250, style({opacity: 0}))
    ]),
]);

