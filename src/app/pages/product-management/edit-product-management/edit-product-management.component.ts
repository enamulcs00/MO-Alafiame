import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product-management',
  templateUrl: './edit-product-management.component.html',
  styleUrls: ['./edit-product-management.component.css']
})
export class EditProductManagementComponent implements OnInit {
  id: string = "1";
  editproductForm: FormGroup;

  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) { 
    
    const id = this.activate.snapshot.paramMap.get('id');
    this.editproductForm = new FormGroup({
      productName: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      UsedFor: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required])
     })
  }

  ngOnInit() {
  }

}
