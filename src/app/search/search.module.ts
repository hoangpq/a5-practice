import {NgModule} from '@angular/core';
import {HttpClientJsonpModule} from '@angular/common/http';
import {SearchService} from "./search.service";

@NgModule({
    imports: [
        HttpClientJsonpModule,
    ],
    providers: [
        SearchService,
    ]
})
export class SearchModule {}
