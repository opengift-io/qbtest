import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    { path: 'review', component : AppComponent, data: { initTab : 'review' } },
    { path: 'account', component: AppComponent, data: { initTab : 'account' } },
    { path: 'service', component: AppComponent, data: { initTab : 'service' } },
    { path: 'bag', component: AppComponent, data: { initTab : 'bag' } },
    { path: 'functions', component: AppComponent, data: { initTab : 'function' } }
];

@NgModule({
   imports : [
       RouterModule.forRoot(appRoutes)
   ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {



}
