import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
declare var $: any;
@Component({
  selector: 'app-gift-card-management',
  templateUrl: './gift-card-management.component.html',
  styleUrls: ['./gift-card-management.component.css']
})
export class GiftCardManagementComponent implements OnInit {
  searchForm: FormGroup;
  total: number;
  currentPage: number = 1;
  itemPerPage:number=5;
  gifiId: any;
  userId:any;
  userDataList:any= [];
  result: any;
  userList:any
  constructor(public service: MainService) { }

  ngOnInit() {
    this.getCustomer()
    this.searchForm = new FormGroup({
      'search': new FormControl(''),
      'startdate': new FormControl(''),
      'enddate': new FormControl(''),
    })
    this.giftList()
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  pagination(page) {
    this.currentPage = page;
    console.log(this.currentPage)
    this.giftList()
  }
  giftList() {
    this.service.showSpinner()
    let formData = {
      "page": this.currentPage ,
      "limit": this.itemPerPage
    }
    this.service.postApi('admin/giftList', formData, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
        this.userDataList =res.result.docs
        this.total=res.result.total
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
     }, (error) => {
        this.service.hideSpinner()
    })
  }
  reset(){
    this.searchForm.reset()
    this.giftList()
  }
  searchGift() {
    this.service.showSpinner()
    let formData = {
      "page":this.currentPage,
      "limit": this.itemPerPage,
      "search": this.searchForm.value.search,
      "fromDate":Math.round(new Date(this.searchForm.value.startdate).getTime()),
      "toDate": Math.round(new Date(this.searchForm.value.enddate).getTime()),
    }
    this.service.postApi('admin/giftList', formData, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
        this.userDataList=res.result?res.result.docs:[]
        this.total=res.result.total
      }else{
        this.userDataList=[]
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
     }, (error) => {
        this.service.hideSpinner()
    })
  }
  //            Delete section
  openModal(id) {
    $('#deleteModal').modal('show')
    this.gifiId = id
  }
  deleteGift() {
    this.service.showSpinner()
    let data = {
      'giftId': this.gifiId
    }
    this.service.deleteApi(`admin/deleteGift`, data, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.giftList()
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
        $('#deleteModal').modal('hide')
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
        $('#deleteModal').modal('hide')
      }
    }, (error) => {
        this.service.hideSpinner()
    })
  }
  openRefModal(id){
    $('#setRefferal').modal('show')
this.gifiId = id
  }

  setPoint(){
    let data =
    {
      userId: this.userId,
      giftId: this.gifiId
    }
    this.service.showSpinner();
    this.service.postApi('admin/sendGiftToUser', data, 1).subscribe((res: any) => {
      console.log("Loyalityvalue response ==>", res)
      if (res.response_code == 200 && res.result) {
       this.service.hideSpinner();
        this.service.successToast(res.response_message)
        $('#setRefferal').modal('hide');
      } else {
        this.service.hideSpinner();
        this.service.errorToast(res.responseMessage)
        $('#setRefferal').modal('hide');
      }
      error => {
        this.service.hideSpinner();
        this.service.errorToast('Something went wrong')
      }
    })

   }

   getCustomer(){
    this.service.showSpinner();
    let data ={
      'page':this.currentPage,
      'limit':'100',
    }
    this.service.postApi('admin/listUsers',data, 1).subscribe((res:any)=>{
      console.log('Customer data',res)
      if(res.responseCode==200){
        this.service.hideSpinner();
        this.service.successToast(res.responseMessage)
        this.userList=res.result.docs;


      }
      else{
        this.service.hideSpinner();
      this.service.errorToast(res.responseMessage)
      }

    },(error)=>{
      this.service.hideSpinner();
        this.service.errorToast('Something went wrong')
    })
  }
  selected(id){
    this.userId= id.target.value
    console.log('This is serve id',id.target.value);
      }
}
