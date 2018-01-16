import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SearchModule} from './search/search.module';
import {SearchListComponent} from './search-list.component';
import {SearchItemComponent} from './search-item.component';
import {TodoFormComponent} from './todo-form.component';
import {GameModule} from './game/game.module';
import {RouterModule, Routes} from '@angular/router';
import {GameComponent} from './game/game.component';
import {MainComponent} from './main.component';
import {ServiceModule} from './services/service.module';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'game', component: GameComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true},
        ),
        BrowserModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        SearchModule,
        GameModule,
        ServiceModule,
        ReactiveFormsModule,
    ],
    declarations: [
        MainComponent,
        AppComponent,
        SearchListComponent,
        SearchItemComponent,
        TodoFormComponent,
    ],
    providers: [],
    bootstrap: [MainComponent],
})
export class AppModule {
}
