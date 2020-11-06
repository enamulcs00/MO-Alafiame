import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/config/api-urls/api-urls';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  notificationForm: FormGroup;
  itemPerPage: number=10;
  currentPage: number=1;
  notificationList: any;
  total: any;
 

  constructor(private router: Router, public service: MainService) { }

  ngOnInit() {
    this.notificationFormValidation();
    this.getNotification()
  }

  notificationFormValidation() {
    this.notificationForm = new FormGroup({
        'search': new FormControl(''),
        'startdate': new FormControl(''),
        'enddate': new FormControl(''),
    })
  }

  getNotification() {
    this.service.showSpinner()
    let formData = {
      "page": this.currentPage - 1,
      "limit": this.itemPerPage
    }
    this.service.postApi('admin/notificationList', formData, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.service.hideSpinner()
        console.log(res)
        this.service.successToast(res.responseMessage)
        this.notificationList =res.result.docs
        this.total=res.result.total
        console.log(this.notificationList)
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
    })
  }

}
