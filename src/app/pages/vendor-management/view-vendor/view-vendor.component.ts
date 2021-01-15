import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent implements OnInit {
  Id: any;
  venderDetail: any;
  vendorPermission: any;
  permissionarr: any=[];
  transactinList: any;
  permissions: any=[];

  constructor(private activatedRoute:ActivatedRoute,public mainservice:MainService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.Id=res.id
    })
    this.getVender()
    this.getVendorTransaction()
  }
  getVender(){
    this.mainservice.showSpinner()
  this.mainservice.getApi(`admin/viewVendor/${this.Id}`,1).subscribe((res:any)=>{
    if (res.responseCode == 200){
      this.mainservice.hideSpinner()
      this.venderDetail=res.result
      this.vendorPermission=res.result.permissions
    
      for (let i in this.vendorPermission){
        if(this.vendorPermission[i]==true){
          this.permissions.push(i)
        }
      }
      for(let i of this.permissions){
        if (i== 'vendorManagement') {
         this.permissionarr.push('Vendor Management')
        }
        else if (i== 'transactionManagement' ) {
          this.permissionarr.push('Transaction Management')
        }
        else if (i== 'dashboardManagement') {
          this.permissionarr.push('Dashboard Management')
        }
        else if (i== 'productManagement') {
          this.permissionarr.push('Product Management')
        }
        else if (i== 'serviceManagement') {
          this.permissionarr.push('Service Management')
        }
        else if (i== 'notificationManagement') {
          this.permissionarr.push('Notification Management')
        }
        else if (i== 'giftCardManagement') {
          this.permissionarr.push('Gift Card Management')
        }
        else if (i== 'staticContentManagement') {
          this.permissionarr.push('Static Content Management')
        }
      }
       
       console.log( this.permissionarr)
    }else{
      this.mainservice.hideSpinner()
      this.mainservice.errorToast(res.responseMessage)
    }
  },(err)=>{
    this.mainservice.hideSpinner()
    this.mainservice.errorToast(err.responseMessage)
  })
  }

getVendorTransaction(){
  this.mainservice.showSpinner()
  let data ={
    'userId' :this.Id
  }
  this.mainservice.postApi('admin/vendorTransactionList',data,1).subscribe((res:any)=>{
    if (res.responseCode == 200){
      this.mainservice.hideSpinner()
      this.transactinList=res.result
    }else{
      this.mainservice.hideSpinner()
this.mainservice.errorToast(res.responseMessage)
    }
  },(err)=>{
    this.mainservice.hideSpinner()
this.mainservice.errorToast(err.responseMessage)
  })
}

}
