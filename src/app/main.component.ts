import {Component} from '@angular/core';

@Component({
    selector: 'main',
    template: `
        <div>
            <nav>
                <a routerLink="/">Home</a>
                <a routerLink="/game">Game</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        nav {
            margin-bottom: 10px;
        }
    `]
})
export class MainComponent {}


