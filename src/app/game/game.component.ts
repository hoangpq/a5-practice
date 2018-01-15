import {Component} from '@angular/core';

@Component({
    selector: 'game',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" [ngStyle]="style">
            <g snake></g>
        </svg>
    `,
})
export class GameComponent {
    style: any = {
        width: 300,
        height: 300,
        backgroundColor: '#9090A2',
    };
}
