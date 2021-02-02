import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  addVendorForm: FormGroup;
  checkArr: any;

  constructor(public mainservice:MainService, private router:Router) { }

  ngOnInit() {
    this.addVendorForm= new FormGroup({
      'firstName': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),
      'email': new FormControl('', [Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,9}|[0-9]{1,3})(\]?)$/i)]),
      'Customernumber': new FormControl('', [Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
      'password':new FormControl('', [Validators.required,Validators.pattern(/^(?=^.{8,16}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])(?!.*\s).*$/)]),
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

  addVendor(){
  let data= {
    'firstName':this.addVendorForm.value.firstName,
    'email':this.addVendorForm.value.email,
    'mobileNumber':this.addVendorForm.value.Customernumber,
    'password':this.addVendorForm.value.password,
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
  this.mainservice.postApi('admin/addVendor',data,1).subscribe((res:any)=>{
    if (res.responseCode == 200){
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
