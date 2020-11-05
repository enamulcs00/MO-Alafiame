import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { ApiUrls } from 'src/app/config/api-urls/api-urls';
declare var $: any;




@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  
  filterName: string;
  productlists: any = [];
  page: 0;
  limit: 10;
  productId: any;

  constructor(private router: Router,public mainService: MainService) {
    
    
   }

  ngOnInit() {
    this.productList();
  }
  searchValue(value) {
    this.filterName = value
    console.log('filterName==>>', this.filterName)
    this.productlists = [];
    this.productList();
  }
  productList()
  {
    this.mainService.showSpinner();
    
    let object = {
      "search": this.filterName,
      "page": this.page,
      "limit": this.limit
      }
    this.mainService.postApi('admin/productList', object, 1).subscribe(res => {
      console.log(" productList==>", res)
      if (res.responseCode == 200) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        
        
      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
      error => {
        this.mainService.hideSpinner();
        this.mainService.errorToast(error.responseMessage)
      }
    })
  }
  deleteFunction(id) {
     this.productId  = id
     console.log('delete modal', this.productId)
    $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
  }
  deleteUser()
  {
    this.mainService.showSpinner()
    let object = {
      'productId': this.productId
    }

    this.mainService.deleteApi('admin/deleteProduct',object,1).subscribe(res => {
      console.log('delete id=========>', res)
      if (res.responseCode == 200) {
       this.productList()
        this.mainService.hideSpinner()
        this.mainService.successToast(res.responseMessage)
        this.productList()
      } else {
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }
    }, error => {
      this.mainService.hideSpinner()
      this.mainService.errorToast(error.responseMessage)
    })
  }
  blockFunction(id)
  {
    this.productId  = id
     console.log('Block Modal', this.productId)
    $('#blockModal').modal({ backdrop: 'static', keyboard: false })
 }
 blockUser()
 {
  this.mainService.showSpinner()
  let data = {
    'productId': this.productId
  }

  this.mainService.postApi('admin/blockUnblockProduct',data,1).subscribe(res => {
    console.log('block id=========>', res)
    if (res.responseCode == 200) {
      this.productList()
      this.mainService.hideSpinner()
      this.mainService.successToast(res.responseMessage)
      this.productList()
    } else {
      this.mainService.hideSpinner()
      this.mainService.errorToast(res.responseMessage)
    }
  }, error => {
    this.mainService.hideSpinner()
    this.mainService.errorToast(error.responseMessage)
  })

 }

}
