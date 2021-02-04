import { ngxCsv } from 'ngx-csv/ngx-csv';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
declare var $: any;

@Component({
  selector: 'app-home-visit-service',
  templateUrl: './home-visit-service.component.html',
  styleUrls: ['./home-visit-service.component.css']
})
export class HomeVisitServiceComponent implements OnInit {
  search: string;
  profile: any;
  addSubForm: FormGroup;
  limit:number= 5;
  currentPage: number = 1;
  itemPerPage:number=5;
servicelists: any=[];
ServiceId:any;
categoryList: any=[];
categoryLength:any;
  categoryId: string;


  constructor(private router: Router,public mainService: MainService) { }

  ngOnInit() {
    this.addSubForm = new FormGroup({
      'categoryName': new FormControl('', Validators.required),
    });
    this.categoryLists();
    this.serviceList();

  }
  openAdd(){
    $('#addSub').modal('show')
   }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.profile = reader.result;
    console.log("profile", this.profile)
  }

  addSubService(){
    let data =
    {
       'categoryId':this.ServiceId,
      'subCategoryName': this.addSubForm.value.categoryName,
      'subCategoryImage': this.profile,
    }
    this.mainService.showSpinner();
    this.mainService.postApi('admin/addService', data, 1).subscribe((res: any) => {
      console.log("addProduct response ==>", res)
      if (res.responseCode == 200 && res.result) {
        this.profile = ''
      this.addSubForm.reset();
      this.serviceList()
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        $('#addSub').modal('hide');

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

   exportCSV() {
    let dataArr = [];
    dataArr.push({
      sno: "S.No",
      Name: "Category Name",
      ImageURL: "Category Image",
      Update: "Updated On"
    });
    this.servicelists.forEach((element, ind) => {
      // console.log(element.subcategoryData[0].subCategoryName)
      console.log(element.subcategoryData)
      dataArr.push({
        sno: ind + 1,
        Name: element.categoryName ? element.categoryName : '--',
        ImageURL: element.categoryImage ? element.categoryImage : '--',
        Update: element.updatedAt ? element.updatedAt.split("T")[0] : '--',
      })
    })
    new ngxCsv(dataArr, 'Service_management');

  }


  searchValue() {
    this.mainService.showSpinner();
    let object = {
      "search": this.search,
      "page": this.currentPage,
      "limit": this.limit
     }
   this.mainService.postApi('admin/serviceList', object, 1).subscribe((res:any) => {
      console.log("Search List==>", res)
      if (res.responseCode == 200) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        this.servicelists = res.result.docs
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
//        this.mainService.successToast(res.responseMessage)


      } else {
        this.mainService.hideSpinner();
     //   this.mainService.errorToast(res.responseMessage)
      }
      error => {
        this.mainService.hideSpinner();
       // this.mainService.errorToast(error.responseMessage)
      }
    })
  }
  selected(id){
this.ServiceId = id.target.value
console.log('This is serve id',id.target.value);
  }
  serviceList()
  {
     this.mainService.showSpinner();

    let object = {
      "page": this.currentPage,
      "limit": this.itemPerPage
      }
    this.mainService.postApi('admin/serviceList',object,1).subscribe((res:any) => {
      console.log("New Service List==>", res)

      if (res.responseCode == 200 && res.result) {
        this.servicelists = res.result.docs
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


  deleteFunction(id) {
     this.categoryId  = id
     console.log('This is Cat Id',id)
     $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
  }
  deleteUser()
{
  let deletEndpoint = 'admin/deleteCategory'
    this.mainService.showSpinner()
    let object = {
      'categoryId': this.categoryId
    }

    this.mainService.deleteApi(deletEndpoint,object,1).subscribe(res => {
      console.log('This is Delet Details:',res)
     if (res.responseCode == 200) {
        this.mainService.hideSpinner()
        $('#deleteModal').modal('hide');
        this.serviceList();
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
sliderRound(id){
  this.ServiceId = id
  let url = 'admin/markUnmarkService'
  let obj = {
    _id:this.ServiceId
  }
  this.mainService.showSpinner();
  this.mainService.postApi(url, obj, 1).subscribe((res: any) => {
    this.mainService.hideSpinner()
    if (res.responseCode == 200) {

      this.mainService.successToast(res.responseMessage);
      this.serviceList();
    } else {
      this.mainService.hideSpinner();
      this.mainService.errorToast(res.responseMessage)
    }
  },
  error=>{
    this.mainService.hideSpinner()
    this.mainService.errorToast('Something went wrong');
  })
}
}
