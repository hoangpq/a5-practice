declare var require: any;
import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {SearchService} from './search/search.service';

@Component({
    selector: 'search-item',
    templateUrl: 'search-item.component.html',
    styleUrls: ['app.component.css'],
})
export class SearchItemComponent implements OnChanges, OnDestroy {
    @Input() index: number;
    @Input() text: string;
    @Output() onItemSelect = new EventEmitter<any>();

    imgSrc: string = require('../assets/images/loading.gif'); // default
    noImage: string = require('../assets/images/no_image.png'); // no image

    constructor(private searchService: SearchService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.text) {
            this.searchService
                .loadImage(changes.text.currentValue)
                .subscribe(
                    imgSrc => this.imgSrc = imgSrc,
                    () => this.imgSrc = this.noImage,
                )
        }
    }

    ngOnDestroy(): void {
        console.log(`Destroyed`);
    }

}