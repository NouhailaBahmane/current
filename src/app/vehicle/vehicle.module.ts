import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    VehicleComponent,
    VehicleDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    VehicleComponent
  ]
})
export class VehicleModule { }
