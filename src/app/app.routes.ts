import { Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
    { path: 'one', canActivate: [adminGuard], component: PageOneComponent, children:[
        { path: 'two', component: PageTwoComponent },
    ] },
    
    { path: 'two', component: PageTwoComponent },
    { path: '', redirectTo: 'two', pathMatch: 'full'}
];
