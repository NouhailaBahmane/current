import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {
  @Input() driver:Driver
 
  constructor(private sanitizer: DomSanitizer,private driverService:DriverService,private router:Router) { }

  ngOnInit(): void {
  }
  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }
  onShow():void{
    this.driverService.driverSElected.next(this.driver);
    this.router.navigate(['/drivers',this.driver.id])
  }
}
