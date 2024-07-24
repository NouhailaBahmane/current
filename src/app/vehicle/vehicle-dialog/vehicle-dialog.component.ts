import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { Vehicle } from '../vehicle';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehicleService } from '../vehicle.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit,AfterViewInit {
  @ViewChild("form") vehicleForm:NgForm;
  vehicle:Vehicle;
  editMode:boolean=false;
  constructor(public dialogRef: MatDialogRef<VehicleDialogComponent>,
    private vehicleService: VehicleService,
    @Inject(MAT_DIALOG_DATA) public data: Vehicle) {
      this.vehicle = data;
      
    }
  ngAfterViewInit(): void {
    if(this.vehicle.id!==undefined){
      this.editMode=true;
      setTimeout(()=>{
        this.vehicleForm.setValue({
          registrationNumber:this.vehicle.registrationNumber,
          brand:this.vehicle.brand,
          currentKm:this.vehicle.currentKm
        })
      })
      
   
    }
    else{
      this.editMode=false;
    }
   
  }

  ngOnInit(): void {

  }
  onSave(){
      this.vehicle.registrationNumber=this.vehicleForm.value.registrationNumber;
      this.vehicle.brand=this.vehicleForm.value.brand;
      this.vehicle.currentKm=this.vehicleForm.value.currentKm;
      if(this.editMode)
      {
        this.vehicleService.updateVehicle(this.vehicle)
      }
      else{
        this.vehicleService.addVehicle(this.vehicle)
      }
      this.vehicleService.vehicleChanged.next()
      this.dialogRef.close()
   }
  
}
