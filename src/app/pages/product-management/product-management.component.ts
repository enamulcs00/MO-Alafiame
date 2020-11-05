import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { ApiUrls } from 'src/app/config/api-urls/api-urls';



@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  search: any;
  filterName: string;
  productlists: any = [];
  page: 1;
  limit: 10;

  constructor(private router: Router,public mainService: MainService) {
    
    
   }

  ngOnInit() {
  }
  searchValue(value) {
    this.filterName = value
    console.log('filterName==>>', this.filterName)
    this.productlists = [];
    this.productList();
  }
  productList()
  {
    
    let object = {
      "search": this.filterName,
      "page": this.page,
      "limit": this.limit,
    }
    this.mainService.postApi('admin/productList', object, 1).subscribe(res => {
      console.log('res==>>', res)
      if (res.body.response_code == 200) {
        // this.spinner.hide()
        // this.subAdminLists=res.body.result.docs?res.body.result.docs:res.body.result  
        this.productlists = res.body.result.docs;
        console.log('packagelistspackagelists==>>>', this.productlists)
     
  
      } else {
        // this.spinner.hide()
        // this.service.toastErr(res.body.response_message)          
      }
    }, error => {
      // this.spinner.hide()
      // this.service.toastErr(error.response_message)
    })
  }

}
