import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
declare var $: any;

@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})
export class VendorManagementComponent implements OnInit {
  searchForm: FormGroup;
  page:any=1
  vendorList: any=[];
  limit:any=5;
  total:any;
  vendorId: any;
  status: string;
  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl('')
    });
    this.getVendorList()
  }

getVendorList(){
    let formdata ={
      'page': this.page,
      'limit': this.limit
    }
    this.mainService.postApi('admin/vendorList', formdata,1).subscribe((res:any) => {
      if (res['responseCode'] == 200) {
        this.vendorList=res.result.docs
        console.log(this.vendorList)
        console.log(res['result']['docs'])
        this.total=res.result.total
       console.log(res)
      } else {
        this.mainService.errorToast(res.responseMessage)
      }
    },(err)=>{
      this.mainService.errorToast(err.responseMessage)
    })
  }
  reset(){
    this.searchForm.reset()
    this.getVendorList()
  }
  searchValue(){
    let formdata ={
      'search':this.searchForm.controls.search.value,
      'fromDate':Date.parse(this.searchForm.controls.fromDate.value),
      'toDate':Date.parse(this.searchForm.controls.toDate.value),
      'page': this.page,
      'limit': this.limit
    }
    this.mainService.postApi('admin/vendorList', formdata,1).subscribe((res:any) => {
      if (res['responseCode'] == 200) {
        this.vendorList=res.result.docs
        this.total=res.result.total
       console.log(res)
      } else {
        this.vendorList=[]
        this.mainService.errorToast(res.responseMessage)
      }
    },(err)=>{
      this.vendorList=[]
      this.mainService.errorToast('Something went wrong')
    })
  }

  deleteFunction(id) {
    this.vendorId  = id
    console.log('delete modal', this.vendorId)
   $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
 }

  deleteUser()
  {
    this.mainService.showSpinner()
    let object = {
      'vendorId': this.vendorId
    }

    this.mainService.postApi('admin/deleteVendor',object,1).subscribe(res => {
      console.log('delete id=========>', res)
      if (res.responseCode == 200) {
        this.getVendorList()
        this.mainService.hideSpinner()
        $('#deleteModal').modal('hide');
        this.mainService.successToast(res.responseMessage)

      } else {
        $('#deleteModal').modal('hide');
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }
    }, error => {
      this.mainService.hideSpinner()
      this.mainService.errorToast(error.responseMessage)
    })
  }
  blockFunction(id,status)
  {
    this.vendorId  = id
    if(status=="ACTIVE"){
this.status="BLOCK"
    }
    else{
      this.status="ACTIVE"
    }
     console.log('Block Modal', this.vendorId)
    $('#blockModal').modal({ backdrop: 'static', keyboard: false })
 }
 blockUser()
 {
  this.mainService.showSpinner()
  let data = {
    'userId': this.vendorId
  }

  this.mainService.postApi('admin/blockUnblockVendor',data,1).subscribe(res => {
    console.log('block id=========>', res)
    if (res.responseCode == 200) {
      this.getVendorList()
      this.mainService.hideSpinner()
      $('#blockModal').modal('hide');
      this.mainService.successToast(res.responseMessage)
    } else {
      $('#blockModal').modal('hide');
      this.mainService.hideSpinner()
      this.mainService.errorToast(res.responseMessage)
    }
  }, error => {
    this.mainService.hideSpinner()
    this.mainService.errorToast(error.responseMessage)
  })

 }
 pagination(event) {
  console.log('This event will display page number:->',event);
  this.page = event;
  this.getVendorList()
}
exportCSV(){
  let dataArr = [];
  dataArr.push({
     sno: "S.No",
     Name: "Name of Vendor",
     Email: "Email-Id",
     Contact:"Mobile Number",
     Created_On:"Date Of Creation"
 });
 this.vendorList.forEach((element,ind) => {
  dataArr.push({
      sno:ind+1,
      Name:element.firstName +''+element.lastName,
      Email:element.email,
      Contact:element.mobileNumber,
      Created_On:String(element.createdAt).slice(0,10),
  })
})
new ngxCsv(dataArr, 'Vendor_management');

}
  }

