import { Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { adminGuard } from './admin.guard';
import { FormComponent } from './form/form.component';
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
    { path: 'one', canActivate: [adminGuard], component: PageOneComponent, children:[
        { path: 'two', component: PageTwoComponent },
    ] },    
    { path: 'form', component: FormComponent },
    { path: '', component: StartPageComponent}
];
