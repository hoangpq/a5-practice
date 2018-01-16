import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject'

import '../assets/css/styles.css';
import {Emitter} from './services/Emitter';

@Component({
    selector: 'app',
    template: `
        <div>
            <input type="text" (input)="term$.next($event.target.value)"/>
            <search-list [term$]="term$"
                         (onReset)="onReset($event)"
                         (onChange)="total=$event">
                Total: {{ total }}
            </search-list>
            <todo-form></todo-form>
        </div>
    `,
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
    term$: Subject<string> = new Subject();
    total: number = 0;

    constructor(private emitter: Emitter) {
        this.emitter.observer.subscribe(
            console.log,
        );
    }

    ngOnInit(): void {
    }

    onReset() {
        this.total = 0;
    }

}