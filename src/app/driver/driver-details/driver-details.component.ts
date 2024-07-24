import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  @Input() driver:Driver;
  vehicles: Vehicle[] = [];
  id:number;
  editMode:boolean=false;
  constructor(private driverService:DriverService, private vehicleService:VehicleService, private router:Router,private activateRoute:ActivatedRoute) {
    
   }

   save(){
    this.driverService.saveDriver(this.driver);
    this.router.navigate(['/drivers'])
   }
  ngOnInit(): void {
    this.vehicles=this.vehicleService.getVehicles();
    this.editMode=this.activateRoute.snapshot.params['id']!==undefined;
    if(!this.editMode){
      this.driver=new Driver();
      this.driver.vehicle=new Vehicle();
    }else{
      this.id=+this.activateRoute.snapshot.params['id'];
      this.driver=this.driverService.getDriver(this.id);
    }
  }

 

}
