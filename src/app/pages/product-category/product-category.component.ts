import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
declare var $: any;


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  search: any;
  page: number=0;
  limit: number=10;
  productId: any;
  total: any;
  categoryList: any=[];
  itemPerPage: number = 10;
  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) { }

  ngOnInit() {
    this.productCategoryList();
  }
  searchValue() {
    this.mainService.showSpinner();
    
    let object = {
      "search": this.search,
      "page": this.page,
      "limit": this.limit
      }
      this.mainService.postApi('admin/productCategoryList', object, 1).subscribe(res => {
        console.log(" productList==>", res)
        if (res.responseCode == 200 && res.result && res.result.docs) {
          this.categoryList= res.result.docs;
          this.total = res.result.total;
          console.log('categorylist',this.categoryList)
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
  productCategoryList()
  {
    this.mainService.showSpinner();
    
    let object = {
      "page": this.page,
      "limit": this.limit
      }
    this.mainService.postApi('admin/productCategoryList', object, 1).subscribe(res => {
      console.log(" productList==>", res)
      if (res.responseCode == 200 && res.result && res.result.docs) {
        this.categoryList= res.result.docs;
        this.total = res.result.total;
        console.log('categorylist',this.categoryList)
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
      'categoryId ': this.productId
    }

    this.mainService.deleteApi('admin/deleteProductCategory',object,1).subscribe(res => {
      console.log('delete id=========>', res)
      if (res.responseCode == 200) {
       //this.productList()
        this.mainService.hideSpinner()
        $('#deleteModal').modal('hide');
        this.mainService.successToast(res.responseMessage)
       
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
      //this.productList()
      this.mainService.hideSpinner()
      $('#blockModal').modal('hide');
      this.mainService.successToast(res.responseMessage)
    } else {
      this.mainService.hideSpinner()
      this.mainService.errorToast(res.responseMessage)
    }
  }, error => {
    this.mainService.hideSpinner()
    this.mainService.errorToast(error.responseMessage)
  })

 }
 pagination(event) {
  console.log(event)
  this.itemPerPage = event;
  this.productCategoryList()
}

}
