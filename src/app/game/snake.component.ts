import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Scheduler} from 'rxjs/Rx';
import {Snake} from './game.object';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';

@Component({
    selector: 'g[snake]',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg">
            <rect *ngFor="let dot of snake.dots"
                  [attr.x]="dot.x"
                  [attr.y]="dot.y"
                  [attr.width]="dot.width"
                  [attr.height]="dot.height"/>
        </svg>
    `,
})
export class SnakeComponent implements OnInit {

    private snake: Snake;

    constructor() {
        this.snake = new Snake();
    }

    ngOnInit() {
        const loop$ =
            Observable
                .interval(600, Scheduler.animationFrame);

        const input$ =
            Observable
                .fromEvent(document, 'keydown')
                .pluck('keyCode')
                .map(keyCode => {
                    switch (keyCode) {
                        case 37: // left
                            return {dx: -1, dy: 0};
                        case 38: // up
                            return {dx: 0, dy: -1};
                        case 39: // right
                            return {dx: 1, dy: 0};
                        case 40: // down
                            return {dx: 0, dy: 1};
                    }
                })
                .distinctUntilChanged()
                .startWith({dx: 0, dy: 1});

        loop$
            .withLatestFrom(input$)
            .map(([, direction]) => direction)
            .scan((acc: Snake, cur: any) => {
                this.snake.update(cur.dx, cur.dy);
                return this.snake;
            }, this.snake)
            // .subscribe(console.log);
    }

}