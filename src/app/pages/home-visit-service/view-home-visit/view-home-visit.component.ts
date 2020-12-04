import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
declare var $: any;
@Component({
  selector: 'app-view-home-visit',
  templateUrl: './view-home-visit.component.html',
  styleUrls: ['./view-home-visit.component.css']
})
export class ViewHomeVisitComponent implements OnInit {
  categoryId: string;
  user: any;
  profile: any;
  id: any;
  subcategorList: any=[];
  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) { }
  ngOnInit() {
    this.activate.paramMap.subscribe(params => {
      this.categoryId  = params.get('id');
      
    });
    this.viewCategory();
  }
  viewCategory()
  {
    this.mainService.showSpinner();
    this.mainService.getApi('admin/viewCategory?categoryId='+this.categoryId,1).subscribe((res: any) => {
     if (res && res.responseCode == 200 && res.result) {
        this.user = res.result;
        this.id=this.user._id;
       this.profile= this.user.categoryImage;
       this.subcategorList = (res.serviceData)?res.serviceData:null;
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
    $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
 }
 deleteUser()
 {
   this.mainService.showSpinner()
   let object = {
     'serviceId ': this.id
   }
   this.mainService.deleteApi('admin/deleteCategory',object,1).subscribe(res => {
    if (res.responseCode == 200) {
       this.mainService.hideSpinner()
       $('#deleteModal').modal('hide');
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
}
