import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 vehicleChanged:Subject<void> = new Subject()
  constructor() { }
  vehicles: Vehicle[] = [
    new Vehicle(0, '13442-a-6', 'Volvo', 157000),
    new Vehicle(1, '13442-a-7', 'bmw', 157000),
    new Vehicle(2, '13442-a-9', 'Audi', 157000),
  ];
  getVehicles(): Vehicle[]{
    return this.vehicles;
  }
  addVehicle(vehicle:Vehicle){
    this.vehicles.push(vehicle);
  }
  updateVehicle(vehicle:Vehicle){
    this.vehicles[vehicle.id]=vehicle;
  }
  getVehicle(id:number):Vehicle{
    return this.vehicles[id];
  }
}
