import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { HouseComponent } from './pages/house/house.component';
import { OfficeComponent } from './pages/office/office.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { SmallComponent } from './pages/small/small.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { DeepComponent } from './pages/deep/deep.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'house', component: HouseComponent },
    { path: 'office', component: OfficeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'warehouse', component: WarehouseComponent },
    { path: 'small', component: SmallComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'deep', component: DeepComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}

