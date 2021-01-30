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
  refid: any;
  status: string;
  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({

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
    },err=>{
      this.mainService.errorToast('Something went wrong')
    })
  }
  reset(){
    this.searchForm.reset()
    this.getVendorList()
  }
  // searchGift() {

  //   let formData = {
  //     "page":this.page,
  //     "limit": this.limit,
  //     "search": this.searchForm.value.search,
  //     "fromDate":Math.round(new Date(this.searchForm.value.startdate).getTime()),
  //     "toDate": Math.round(new Date(this.searchForm.value.enddate).getTime()),
  //   }



  searchValue(){
    let formdata ={

      'fromDate':this.searchForm.value.fromDate,
      'toDate':this.searchForm.value.toDate,
      'page': this.page,
      'limit': this.limit
    }
    this.mainService.postApi('admin/referralList', formdata,1).subscribe((res:any) => {
      if (res.responseCode == 200) {
        this.vendorList=res.result.docs
        this.total=res.result.total
       console.log(res)
       this.mainService.successToast(res.responseMessage)
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
    this.refid  = id
    console.log('delete modal', this.refid)
   $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
 }

  deleteUser()

  {
    let url = 'admin/deleteReferral'
    this.mainService.showSpinner()
    let object = {
      'referralId': this.refid
    }

    this.mainService.deleteApi(url,object,1).subscribe(res => {
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
      this.mainService.errorToast('Something went wrong')
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
     Referral_ID: "Referal ID",
     Referrar: "Referrar Name",
     Referree:"Referre Name",

     EarnedPoint:"Referrar Earned Point",
     Status:"Referral Status",
     Created_On:"Date Of Creation"
 });
 this.vendorList.forEach((element,ind) => {
  dataArr.push({
      sno:ind+1,
      Referral_ID:element.referralCode,
      Referrar:element.userId.name,
      Referree:element.refereeName,
      EarnedPoint:element.referrerEarnedPoint,
      Status:element.referralStatus,
      Created_On:String(element.createdAt).slice(0,18),
  })
})
new ngxCsv(dataArr, 'Referral_management');

}
}
