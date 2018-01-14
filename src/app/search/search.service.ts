import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) {
    }

    search(term: string): Observable<any> {
        const params = new HttpParams()
            .set('action', 'opensearch')
            .set('format', 'json')
            .set('search', term)
            .set('prop', 'images');
        return this.http
            .jsonp(`http://en.wikipedia.org/w/api.php?${params.toString()}`, 'callback')
            .map((response: any) => response[1]);
    }

    loadImage(term: string) {
        return this.http
            .jsonp(`https://en.wikipedia.org/w/api.php?action=query&titles=${term}&prop=name&prop=pageimages&format=json&pithumbsize=100`, 'callback')
            .map((response: any) => {
                const k = Object.keys(response.query.pages)[0];
                const info = response.query.pages[k];
                return info.thumbnail.source;
            });
    }
}
