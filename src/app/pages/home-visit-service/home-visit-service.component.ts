import { ngxCsv } from 'ngx-csv/ngx-csv';
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
  search: string;
  currentPage: number = 1;
  itemPerPage:number=5;
servicelists: any=[];
empty:string = "No Data"
categoryList: any=[];
categoryLength:any;
  categoryId: string;
 

  constructor(private router: Router,public mainService: MainService) { }

  ngOnInit() {
    this.categoryLists();
    this.serviceList();
    
  }

  exportCSV(){
    let dataArr = [];
    dataArr.push({
       sno: "S.No",
       Name: "Category Name",
       Image: "Category Image",
       Subcategory:"Subcategories",
       Update:"Updated On"
   });
   this.servicelists.forEach((element,ind) => {
    dataArr.push({
        sno:ind+1,
        Name:element.categoryId.categoryName,
        Charges:element.subCategoryImage,
        Use:element.subCategoryName,
        Type:element.updatedAt,
    })
}) 
new ngxCsv(dataArr, 'Service_management');

  }


  searchValue() {
    

    this.mainService.showSpinner();
    let object = {
      "search": this.search,
      "page": this.currentPage,
      "limit": this.itemPerPage
      }
    this.mainService.postApi('admin/serviceList', object, 1).subscribe((res:any) => {
      console.log("Delete List productList==>", res)
      if (res.responseCode == 200) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        this.servicelists = res.result
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
      console.log(" product List==>", res.result)
      if (res.responseCode == 200 && res.result && res.result.docs) {
        
        this.categoryList = res.result.docs
        
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
      console.log("Service List==>", res.result)
  
      if (res.responseCode == 200 && res.result) {
        this.servicelists = res.result
        this.categoryLength = res.result.length
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
  let deletEndpoint = 'admin/deleteService'
    this.mainService.showSpinner()
    let object = {
      'categoryId': this.categoryId
    }

    this.mainService.deleteApi(deletEndpoint,object,1).subscribe(res => {
      console.log('This is Delet Details:',res)
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

getsubcat(){
  
}

}
