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
  Viewprofile:any;
  page:any=1

  limit:any=5;
  total:any;
  id: any;
  subcategorList: any=[];
  addSubForm: FormGroup;
  editSubForm: FormGroup;
  serviceId: any;
  servicedata: any;
  name:any
  subCategoryView: any;
  marked = false;
  theCheckbox = false;
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
  pagination(event) {
    console.log('This event will display page number:->',event);
    this.page = event;
    this.viewCategory();
  }

  viewCategory()
  {
    this.mainService.showSpinner();
    this.mainService.getApi('admin/viewCategory?categoryId='+this.categoryId,1).subscribe((res: any) => {
     if (res && res.responseCode == 200 && res.result) {
        this.user = res.result;
        this.subCategoryView=res.serviceData
        this.id=this.user._id;
       this.profile= this.user.categoryImage;
       this.subcategorList = (res.serviceData)?res.serviceData:null;
       this.total=this.subcategorList.length
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
     'serviceId': this.categoryId
   }
   this.mainService.postApi('admin/deleteService',object,1).subscribe((res:any) => {
     console.log('Deletid',res)
    if (res.responseCode == 200) {
       this.mainService.hideSpinner()
       $('#deleteModal').modal('hide');
       this.mainService.successToast(res.responseMessage)
       this.viewCategory()
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
      this.theCheckbox = res.result.markAs
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
      this.viewCategory()
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

 ViewFunction(id){
   let url =`admin/viewService?serviceId=${id}`

   $('#viewSub').modal('show')
  this.mainService.showSpinner();
  this.mainService.getApi(url, 1).subscribe((res: any) => {
    if (res.responseCode == 200 && res.result) {
      this.mainService.hideSpinner();
      this.mainService.successToast(res.responseMessage)
      this.Viewprofile=res.result.subCategoryImage
    this.name = res.result.subCategoryName
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
    'markAs': this.marked,
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

valuechanged(categoryId){
    let url = 'admin/markUnmarkService'
    let obj = {
      serviceId:categoryId
    }
    this.mainService.showSpinner();
    this.mainService.postApi(url, obj, 1).subscribe((res: any) => {
      this.mainService.hideSpinner()
      if (res.responseCode == 200) {
        this.mainService.successToast(res.responseMessage);
      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    },
    error=>{
      this.mainService.hideSpinner()
      this.mainService.errorToast('Something went wrong');
    })

  }
  sliderRound(id){
    this.serviceId = id
    let url = 'admin/markUnmarkService'
    let obj = {
      serviceId:this.serviceId
    }
    this.mainService.showSpinner();
    this.mainService.postApi(url, obj, 1).subscribe((res: any) => {
      this.mainService.hideSpinner()
      if (res.responseCode == 200) {

        this.mainService.successToast(res.responseMessage);

      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    },
    error=>{
      this.mainService.hideSpinner()
      this.mainService.errorToast('Something went wrong');
    })
  }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}


