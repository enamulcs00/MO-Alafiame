import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/config/api-urls/api-urls';
import { ngxCsv } from 'ngx-csv/ngx-csv';
declare var $:any;
@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  notificationForm: FormGroup;
  itemPerPage: number=5;
  currentPage: number=1;
  notificationList: any;
  total: any;
  notificationId: any;


  constructor(private router: Router, public service: MainService) { }

  ngOnInit() {
    this.notificationFormValidation();
    this.getNotification()
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  exportCSV() {
    let dataArr = [];
    dataArr.push({
      sno: 'S.No',
      title: 'Title',
      Description: 'Description',
      BroadcastDate: 'Brod cast date'

    });
    this.notificationList.forEach((element, ind) => {
      dataArr.push({
        sno: ind + 1,
        title: element.title ? element.title : '--',
        Description: element.description ? element.description : '--',
        BroadcastDate: element.updatedAt ? element.updatedAt.split("T")[0] : '--',
      })

    })
    new ngxCsv(dataArr, 'Notification_management');

  }
notificationFormValidation() {
    this.notificationForm = new FormGroup({
        'search': new FormControl(''),
        'startdate': new FormControl(''),
        'enddate': new FormControl(''),
    })
  }
  reset(){
    this.notificationForm.reset()
    this.getNotification()
  }
  paginate(page){
    this.currentPage=page;
    this.getNotification()
  }
  getNotification() {
    this.service.showSpinner()
    let formData = {
      "page": this.currentPage-1,
      "limit": this.itemPerPage
    }
    this.service.postApi('admin/notificationList', formData, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.service.hideSpinner()
        console.log('This is notification List',res)
        this.service.successToast(res.responseMessage)
        this.notificationList =res.result.docs
        this.total=res.result.total
        console.log(this.notificationList)
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
    }, (error) => {
      this.service.hideSpinner()
    })
  }

  searchNotification() {
    this.service.showSpinner()
    let formData = {
      "page": this.currentPage-1,
      "limit": this.itemPerPage,
      "search": this.notificationForm.value.search,
      "fromDate":Math.round(new Date(this.notificationForm.value.startdate).getTime()),
      "toDate": Math.round(new Date(this.notificationForm.value.enddate).getTime()),
    }
    this.service.postApi('admin/notificationList', formData, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
        this.notificationList =res.result.docs
        this.total=res.result.total
      }else{
        this.notificationList=[]
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
    }, (error) => {
      this.service.hideSpinner()
    })
  }



  openModal(id){
      $('#deleteModal').modal('show')
      this.notificationId = id
      console.log('Thie id which will be delete',this.notificationId)
  }
  deleteNotification(){
    this.service.showSpinner()
    let data = {
      'notificationId': this.notificationId
    }
    this.service.deleteApi(`admin/deleteNotification`, data, 1).subscribe((res: any) => {
      console.log('This is Notification Delect response:',res);
      if(res.responseCode==200){
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
        $('#deleteModal').modal('hide')
        this.getNotification();
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
        $('#deleteModal').modal('hide')
      }
    }, (error) => {
      this.service.hideSpinner()
    })
  }

}
