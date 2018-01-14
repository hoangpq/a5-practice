import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnakeComponent} from './snake.component';
import {GameComponent} from './game.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        GameComponent,
        SnakeComponent,
    ],
    exports: [
        GameComponent,
    ]
})
export class GameModule {}
