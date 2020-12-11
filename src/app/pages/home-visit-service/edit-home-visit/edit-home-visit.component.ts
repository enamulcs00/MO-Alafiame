
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-home-visit',
  templateUrl: './edit-home-visit.component.html',
  styleUrls: ['./edit-home-visit.component.css']
})
export class EditHomeVisitComponent implements OnInit {
  profile: any;
  user: any;
  categoryId: any;
  constructor(private actRoute:ActivatedRoute,private route:Router,public mainService: MainService) {
   
   }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
    });
    
  }
  
  
}