import { Routes } from '@angular/router';
import { CitylistComponent } from './citylist/citylist.component';
import { CitydetailComponent } from './citydetail/citydetail.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: CitylistComponent },
    { path: 'citydetail', component: CitydetailComponent },
];