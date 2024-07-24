import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleService } from './vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles:Vehicle[];
  
  selectVehicle(id: number) {
  this.dialog.open(VehicleDialogComponent,{
    width:'300px',
    data:this.VehicleService.getVehicle(id)
  })
}
  displayedColumns: string[] = ['id', 'registrationNumber', 'brand', 'currentKm'];

  constructor(private VehicleService:VehicleService,private dialog:MatDialog) { 
    this.vehicles = this.VehicleService.getVehicles()
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.vehicles);
    this.VehicleService.vehicleChanged.subscribe(()=>{
    this.dataSource=new MatTableDataSource(this.vehicles)
    })
  }
  dataSource!: MatTableDataSource<Vehicle>;
 
  OnVehicleChanged(vehicle:Vehicle){
    this.VehicleService.getVehicles().push(vehicle)
    this.dataSource = new MatTableDataSource(this.vehicles);
  }
  OnVehicleAded(vehicle:Vehicle):void{
    this.vehicles.push(vehicle);
    this.dataSource=new MatTableDataSource(this.vehicles);
  }
  alter(){
    this.dialog.open(VehicleDialogComponent,{
      width:'300px',
      data:new Vehicle()
    })
  }
}
