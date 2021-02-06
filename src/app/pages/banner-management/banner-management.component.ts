import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

declare var $: any;
@Component({
  selector: 'app-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.css']
})
export class BannerManagementComponent implements OnInit {
  addBannerForm:FormGroup;
  EditBannerForm:FormGroup;
  profile:any;
  itemPerPage: number = 5;
  currentPage :number=1;
  BannerList:any = [];
  bannerId:any;
  BannerEditId:any;
  bannerFormValues:any = []
  ViewbannerItems:any = [];
  constructor(private router: Router, public mainService: MainService) { }

  ngOnInit() {
    this.EditBannerForm = new FormGroup({
      "title": new FormControl('', Validators.required),
    });
    this.GetbannerList()

    this.addBannerForm = new FormGroup({
      "title": new FormControl('', Validators.required),
    });
  }

  pagination(event) {
    console.log(event)
    this.currentPage = event;
    this.GetbannerList()
  }

  ViewBannerModal(id){
    this.bannerId =id;
    $('#ViewBanner').modal('show')
    this.ViewBanner()
  }
  ViewBanner(){
    const data = {
      bannerId: this.bannerId
    }
    this.mainService.showSpinner();
    this.mainService.getApi(`admin/viewBanner/${this.bannerId}`, 1).subscribe((res: any) => {
console.log('View Banner Details',res.result)
      if (res.responseCode == 200) {
        this.ViewbannerItems = res.result;
        this.mainService.hideSpinner()
        this.mainService.successToast(res.responseMessage);

      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    },
    error=>{
      this.mainService.hideSpinner()
      this.mainService.errorToast(error.responseMessage);
    })

  }
  deleteBannerModal(id) {
    this.bannerId =id;
    $('#delete').modal('show')
    console.log('DeletId',id)
  }

  deleteBanner() {
    let url = 'admin/deleteBanner'
    let data = {
      bannerId: this.bannerId
    }
    this.mainService.showSpinner();
    this.mainService.deleteApi(url, data, 1).subscribe((res: any) => {
      $('#delete').modal('hide')
      if (res.responseCode == 200) {
        this.mainService.hideSpinner()
        this.mainService.successToast(res.responseMessage);
        this.GetbannerList()
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
GetbannerList(){
  let url = 'admin/bannerList';
  this.mainService.getApi(url,1).subscribe((res:any)=>{
    console.log('This is Banner',res.result);
    if (res.responseCode == 200) {
      this.mainService.hideSpinner()
     this.BannerList = res.result
      this.mainService.successToast(res.responseMessage);

    } else {
      this.mainService.hideSpinner();
      this.mainService.errorToast(res.responseMessage)
    }
  }, error=>{
this.mainService.hideSpinner();
this.mainService.errorToast('Something went wrong')
  })
}
SetBannerItemInEditForm(){
  this.mainService.showSpinner();
  this.mainService.getApi(`admin/viewBanner/${this.BannerEditId}`, 1).subscribe((res: any) => {
  console.log('View Banner Details',res.result)
    if (res.responseCode == 200) {
      this.bannerFormValues = res.result;
      this.profile = this.bannerFormValues.image
      this.EditBannerForm.patchValue({
        'title': this.bannerFormValues.title
      })
      this.mainService.hideSpinner()
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

EditBannerModal(id){
  $('#EditBanner').modal('show')
  this.BannerEditId =id;
 this.SetBannerItemInEditForm()
}
EditBanner(){
  let url = 'admin/editBanner'

  let data =
    {
      'bannerId': this.BannerEditId,
      'title': this.EditBannerForm.value.title,
      'image': this.profile,
    }
    this.mainService.showSpinner();
    this.mainService.putApi(url, data, 1).subscribe((res: any) => {
      console.log("EditBanner  response ==>", res)
      if (res.responseCode == 200 && res.result) {

        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        $('#EditBanner').modal('hide');
        this.GetbannerList()
        this.EditBannerForm.reset()

      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
        $('#EditBanner').modal('hide');
      }
      error => {
        this.mainService.hideSpinner();
        this.mainService.errorToast(error.responseMessage)
        $('#EditBanner').modal('hide');
      }
    })


}

addModal(){
  $('#addSub').modal('show')
}
addNewBanner(){
  let url = 'admin/addBanner'

  let data =
    {

      'title': this.addBannerForm.value.title,
      'image': this.profile,
    }
    this.mainService.showSpinner();
    this.mainService.postApi(url, data, 1).subscribe((res: any) => {
      console.log("AddBanner  response ==>", res)
      if (res.responseCode == 200 && res.result) {

        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        $('#addSub').modal('hide');
        this.GetbannerList()
        this.addBannerForm.reset()

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
