import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
declare var $: any;

@Component({
  selector: 'app-home-visit-service',
  templateUrl: './home-visit-service.component.html',
  styleUrls: ['./home-visit-service.component.css']
})
export class HomeVisitServiceComponent implements OnInit {
<<<<<<< HEAD
  search: string;
  currentPage: number = 1;
  itemPerPage:number=5;
servicelists: any=[];
subCategoryItem:any = [];
categoryList: any=[];
categoryLength:any;
  categoryId: string;
 

  constructor(private router: Router,public mainService: MainService) { }

  ngOnInit() {
    this.categoryLists();
    this.serviceList();
  }
  searchValue() {
   
    this.mainService.showSpinner();
    let object = {
      "search": this.search,
      "page": this.currentPage,
      "limit": this.itemPerPage
      }
    this.mainService.postApi('admin/categoryList', object, 1).subscribe(res => {
      console.log(" productList==>", res)
      if (res.responseCode == 200 && res.result) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        this.categoryList = res.result.docs
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
  categoryLists()
  {
    this.mainService.showSpinner();
    
    let object = {
      "page": this.currentPage,
      "limit": this.itemPerPage
      }
    this.mainService.postApi('admin/categoryList',object,1).subscribe(res => {
      console.log(" productList Checking==>", res.result)
      if (res.responseCode == 200 && res.result && res.result.docs) {
        console.log('shweta',res.result)
        this.categoryList = res.result.docs
        this.categoryLength = res.result.total
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
  serviceList()
  {
     this.mainService.showSpinner();
    
    let object = {
      "page": this.currentPage,
      "limit": this.itemPerPage
      }
    this.mainService.postApi('admin/serviceList',object,1).subscribe(res => {
      console.log("Service & productList==>", res.result.docs)
      if (res.responseCode == 200 && res.result && res.result.docs) {
        this.servicelists = res.result.docs
        for( var item of this.servicelists){
          this.subCategoryItem.push(item.subCategoryName)
        }
        
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
     this.categoryId  = id
     $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
  }
  deleteUser()
  {
    this.mainService.showSpinner()
    let object = {
      'categoryId': this.categoryId
    }

    this.mainService.deleteApi('admin/deleteCategory',object,1).subscribe(res => {
     if (res.responseCode == 200) {
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

 pagination(event) {
  console.log('PageNo',event)
  this.currentPage = event;
  this.categoryLists();
  this.serviceList();
}

=======
  search:any;
  total:any;
  constructor() { }

  ngOnInit() {}

  searchValue(){}

  pagination(event){}
>>>>>>> 27e696c67efb2e0b9f2133990aa92825880f1c2a

  deleteUser(){}
}
