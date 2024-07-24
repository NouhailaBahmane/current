import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverItemComponent } from './driver/driver-item/driver-item.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { VehicleDialogComponent } from './vehicle/vehicle-dialog/vehicle-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ShadowDirective } from './utils/shadow.directive';
import { FirstNameFormatPipe } from './first-name-format.pipe';
import { SharedModule } from './shared.module';
import { DriverModule } from './driver/driver.module';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    DriverModule,
    VehicleModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
