import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverItemComponent } from './driver-item/driver-item.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverComponent } from './driver.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    DriverComponent,
    DriverListComponent,
    DriverItemComponent,
    DriverDetailsComponent,
  ],
  imports: [
  SharedModule
  ],
  exports:[
    DriverComponent
  ]
})
export class DriverModule { }
