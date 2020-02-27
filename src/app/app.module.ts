import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { HouseComponent } from './pages/house/house.component';
import { OfficeComponent } from './pages/office/office.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { SmallComponent } from './pages/small/small.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { DeepComponent } from './pages/deep/deep.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    HouseComponent,
    OfficeComponent,
    ContactComponent,
    WarehouseComponent,
    SmallComponent,
    RestaurantComponent,
    DeepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
