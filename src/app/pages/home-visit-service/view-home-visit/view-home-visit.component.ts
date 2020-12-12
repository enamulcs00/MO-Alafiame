import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  addSubForm: FormGroup;
  editSubForm: FormGroup;
  serviceId: any;
  servicedata: any;
  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) { }
  ngOnInit() {
    this.activate.paramMap.subscribe(params => {
      this.categoryId  = params.get('id');
    });
    this.addSubForm = new FormGroup({
      "categoryName": new FormControl('', Validators.required),
    });
    this.editSubForm = new FormGroup({
      "categoryName": new FormControl('', Validators.required),
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

 openAdd(){
  $('#addSub').modal('show')
 }
 editFunction(id){
  $('#editSub').modal('show')
  this.mainService.showSpinner();
  this.mainService.getApi(`admin/viewService?serviceId=${id}`, 1).subscribe((res: any) => {
    if (res.responseCode == 200 && res.result) {
      this.mainService.hideSpinner();
      this.mainService.successToast(res.responseMessage)
      this.profile=res.result.subCategoryImage
      this.editSubForm.patchValue({
        "categoryName":res.result.subCategoryName
       })
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

 addSubService(){
  let data = 
  {
    'categoryId':this.categoryId,
    'subCategoryName': this.addSubForm.value.categoryName,
    'subCategoryImage': this.profile,
  }
  this.mainService.showSpinner();
  this.mainService.postApi('admin/addService', data, 1).subscribe((res: any) => {
    console.log("addProduct response ==>", res)
    if (res.responseCode == 200 && res.result) {
      this.mainService.hideSpinner();
      this.mainService.successToast(res.responseMessage)
      $('#addSub').modal('hide');

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

 editSubService(){
  let data = 
  {
    'serviceId':this.serviceId,
    'subCategoryName': this.editSubForm.value.categoryName,
    'subCategoryImage': this.profile,
  }
  this.mainService.showSpinner();
  this.mainService.postApi('admin/addService', data, 1).subscribe((res: any) => {
    console.log("addProduct response ==>", res)
    if (res.responseCode == 200 && res.result) {
      this.mainService.hideSpinner();
      this.mainService.successToast(res.responseMessage)
      $('#editSub').modal('hide');
    } else {
      this.mainService.hideSpinner();
      this.mainService.errorToast(res.responseMessage)
      $('#editSub').modal('hide');

    }
    error => {
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage)
    }
  })
 }

 handleInputChange(e) {
  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  
  var reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
  let reader = e.target;
  this.profile = reader.result;
  console.log("profile", this.profile)
}
}
