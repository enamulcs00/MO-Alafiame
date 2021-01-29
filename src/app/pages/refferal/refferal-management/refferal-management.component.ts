import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ngxCsv } from 'ngx-csv';
import { MainService } from 'src/app/provider/main.service';
declare var $:any
@Component({
  selector: 'app-refferal-management',
  templateUrl: './refferal-management.component.html',
  styleUrls: ['./refferal-management.component.css']
})
export class RefferalManagementComponent implements OnInit {

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
    this.mainService.postApi('admin/referralList', formdata,1).subscribe((res:any) => {
      console.log('Refferal',res)
      if (res['responseCode'] == 200) {
        this.vendorList=res.result.docs
        console.log(this.vendorList)
        console.log(res['result']['docs'])
        this.total=res.result.total
       console.log(res)
      } else {
        this.mainService.errorToast(res.message)
      }
    },(err)=>{
      this.mainService.errorToast(err.message)
    })
  }

  searchValue(){
    let formdata ={
      'search':this.searchForm.controls.search.value,
      'fromDate':Date.parse(this.searchForm.controls.fromDate.value),
      'toDate':Date.parse(this.searchForm.controls.toDate.value),
      'page': this.page,
      'limit': this.limit
    }
    this.mainService.postApi('api/v1/admin/vendorList', formdata,1).subscribe(res => {
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
      this.mainService.errorToast(err.message)
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
new ngxCsv(dataArr, 'Referral_management');

}
}
