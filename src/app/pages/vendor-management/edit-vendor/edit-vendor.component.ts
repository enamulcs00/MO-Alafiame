import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  addVendorForm: FormGroup;
  Id: any;

  constructor(private activatedRoute:ActivatedRoute,public mainservice:MainService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.Id=res.id
    })
    this.getVender()
    this.addVendorForm= new FormGroup({
      'firstName': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),
      'email': new FormControl('', [Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,9}|[0-9]{1,3})(\]?)$/i)]),
      'Customernumber': new FormControl('', [Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
      // 'password':new FormControl('', [Validators.required,Validators.pattern(/^(?=^.{8,16}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])(?!.*\s).*$/)]),
      'dashboardManagement':new FormControl(''),
      'productManagement':new FormControl(''),
      'serviceManagement':new FormControl(''),
      'giftCardManagement':new FormControl(''),
      'notificationManagement':new FormControl(''),
      'staticContentManagement':new FormControl(''),
      'vendorManagement':new FormControl(''),
      'transactionManagement':new FormControl(''),
      'referralmanagement':new FormControl('')

    });
  }

getVender(){
  this.mainservice.showSpinner()
this.mainservice.getApi(`admin/viewVendor/${this.Id}`,1).subscribe((res:any)=>{
  if (res.responseCode == 200){
    this.mainservice.hideSpinner()
    this.addVendorForm.patchValue({
     'firstName':res.result.firstName,
      'email':res.result.email,
      // 'password':res.result.password,
      'Customernumber':res.result.mobileNumber,
      'vendorManagement':res.result.permissions.vendorManagement,
      'dashboardManagement':res.result.permissions.dashboardManagement,
      'productManagement':res.result.permissions.productManagement,
      'serviceManagement':res.result.permissions.serviceManagement,
      'giftCardManagement':res.result.permissions.giftCardManagement,
      'notificationManagement':res.result.permissions.notificationManagement,
      'staticContentManagement':res.result.permissions.staticContentManagement,
      'transactionManagement':res.result.permissions.transactionManagement,
      'referralmanagement':res.result.permissions.referralManagement
    })
  }else{
    this.mainservice.hideSpinner()
    this.mainservice.errorToast(res.responseMessage)
  }
},(err)=>{
  this.mainservice.hideSpinner()
  this.mainservice.errorToast(err.responseMessage)
})
}

  editVendor(){
    this.mainservice.showSpinner()
    let data= {
      '_id': this.Id,
      'firstName':this.addVendorForm.value.firstName,
      'email':this.addVendorForm.value.email,
      'mobileNumber':this.addVendorForm.value.Customernumber,
      // 'password':this.addVendorForm.value.password,
      'vendorManagement':this.addVendorForm.value.vendorManagement,
      'dashboardManagement':this.addVendorForm.value.dashboardManagement,
      'productManagement':this.addVendorForm.value.productManagement,
      'serviceManagement':this.addVendorForm.value.serviceManagement,
      'giftCardManagement':this.addVendorForm.value.giftCardManagement,
      'notificationManagement':this.addVendorForm.value.notificationManagement,
      'staticContentManagement':this.addVendorForm.value.staticContentManagement,
      'transactionManagement':this.addVendorForm.value.transactionManagement,
      'referralManagement': this.addVendorForm.value.referralmanagement
    }
    this.mainservice.postApi('admin/editVendor',data,1).subscribe((res:any)=>{
      if (res.responseCode == 200){
        this.mainservice.hideSpinner()
        this.mainservice.successToast(res.responseMessage)
        this.router.navigate(['/vendor-management'])
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
