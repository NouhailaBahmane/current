import { EventEmitter, Injectable } from '@angular/core';
import { VehicleService } from '../vehicle/vehicle.service';
import { Driver } from './driver';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  drivers: Driver[] =  []
  driverSElected:Subject<Driver>=new EventEmitter();
  constructor(private vehicleService:VehicleService) {
    const vehicles=this.vehicleService.getVehicles();
    this.drivers =  [
      new Driver(1, 'arbi', 'Ahmed', vehicles[0], 'assets/img/1.jpg'),
      new Driver(1, 'arbi', 'amine', vehicles[1], 'assets/img/2.jpg'),
      new Driver(1, 'arbi', 'ali', vehicles[2], 'assets/img/3.jpg'),
    ];
   }
   getDrivers(): Driver[]{
    return this.drivers;
  }
  getDriver(id:any):Driver{
    return this.drivers[id];
  }
 saveDriver(driver:Driver):void{
  this.drivers.push(driver);
 }
}
