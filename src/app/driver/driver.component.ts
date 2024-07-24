import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver:Driver;
  constructor(private driverSerive:DriverService) { 
    this.driverSerive.driverSElected.subscribe((driver:Driver) => {
      this.driver=driver;
    })
  }
  ngOnInit(): void {
  }

}
