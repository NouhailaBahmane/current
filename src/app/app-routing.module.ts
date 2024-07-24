import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path: '', redirectTo: '/drivers', pathMatch: 'full'},
  {path: 'drivers', component: DriverComponent, children: [
      {path: '', component: DriverListComponent},
      {path: 'new', component: DriverDetailsComponent},
      {path: ':id', component: DriverDetailsComponent}
    ]},
  {path: 'vehicles', component: VehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
