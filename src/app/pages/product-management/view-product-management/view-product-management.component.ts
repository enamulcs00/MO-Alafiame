import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';


@Component({
  selector: 'app-view-product-management',
  templateUrl: './view-product-management.component.html',
  styleUrls: ['./view-product-management.component.css']
})
export class ViewProductManagementComponent implements OnInit {
  

  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) { }

  ngOnInit() {
  }

}
