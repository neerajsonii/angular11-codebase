import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CountriesComponent } from './components/countries/countries.component';
import { LocationsComponent } from './components/locations/locations.component';
import { StatusComponent } from './components/status/status.component';
import { MasterMenuComponent } from './components/master-menu/master-menu.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CountriesComponent,
    LocationsComponent,
    StatusComponent,
    MasterMenuComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  entryComponents: [CountriesComponent, LocationsComponent, StatusComponent]
})
export class DashboardModule { }
