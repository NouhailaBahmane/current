import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Driver } from '../driver';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DriverService } from '../driver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {


 
  drivers:Driver[]=[]
  constructor(private sanitizar:DomSanitizer,private driverService:DriverService,private router:Router,private activateRoute:ActivatedRoute) {
     this.drivers=this.driverService.getDrivers();
   }
   onNewDriver() {
    this.router.navigate(['new'],{relativeTo:this.activateRoute})
    }
  ngOnInit(): void {
  }
  driver!:Driver
 


}
