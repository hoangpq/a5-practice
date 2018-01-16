import {Emitter} from './services/Emitter';

declare var require: any;

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SearchService} from './search/search.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'search-list',
    template: `
        <div>
            <button (click)="onClearList($event)">Reset</button>
            <ng-content></ng-content>
            <ul>
                <search-item 
                        *ngFor="let item of items; let i = index;"
                        (onItemSelect)="onItemSelect($event)"
                        [attr.data-index]="i"
                        [text]="item"
                        [index]="i">
                </search-item>
            </ul>
        </div>
    `,
    styles: [require('./app.component.css')],
})
export class SearchListComponent implements OnInit {
    @Input() term$: Subject<string>;
    @Output() onReset = new EventEmitter();
    @Output() onChange = new EventEmitter<number>();

    items: Array<string> = [];

    constructor(private searchService: SearchService,
                private emitter: Emitter) {

    }

    onClearList($event: Event) {
        this.items = [];
        this.onReset.emit($event);
        this.emitter.emit({'value': 'hello'});
    }

    onItemSelect(title: string) {
        console.log(title);
    }

    ngOnInit(): void {
        this.onChange.emit(0);
        this.term$
            .debounceTime(400)
            .switchMap(term => this.searchService.search(term))
            .subscribe(items => {
                this.items = items;
                this.onChange.emit(items ? items.length : 0);
            });
    }

}

