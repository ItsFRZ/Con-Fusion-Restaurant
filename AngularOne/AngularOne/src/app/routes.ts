import {Routes} from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';

export const routes : Routes = [

    {path : 'home' , component : HomeComponent},
    {path : 'menu' , component : MenuComponent},
    {path : 'dishdetail/:id', component : DishDetailComponent},
    {path : 'about', component : AboutComponent},
    {path : 'contact', component : ContactComponent},
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : '*', redirectTo : '/home'}

];