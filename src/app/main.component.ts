import {Component} from '@angular/core';

enum Role { Admin, Normal }

@Component({
    selector: 'main',
    template: `
        <div>
            <nav>
                <a routerLink="/">Home</a>
                <a routerLink="/game">Game</a>
            </nav>
            <router-outlet></router-outlet>
            <div *ngIf="1 === 1">
                Equals
            </div>
            <select (change)="onRoleChange($event.target.value)">
                <option *ngFor="let role of roles" [value]="role.value">{{ role.name }}</option>
            </select>
        </div>
    `,
    styles: [`
        nav {
            margin-bottom: 10px;
        }
    `]
})
export class MainComponent {
    r: Role = Role.Admin;
    roles: Array<any> = [
        { name: 'Admin', value: Role.Admin },
        { name: 'Normal', value: Role.Normal }
    ];

    onRoleChange(role: Role) {
        console.log(role);
    }
}


