import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-add-login-content',
  templateUrl: './add-login-content.component.html',
  styleUrls: ['./add-login-content.component.css']
})
export class AddLoginContentComponent implements OnInit {
fileFor:any;
SideImage = ''
  addBannerForm:FormGroup;
  profile = ''
  config = {
    uiColor: '#F0F3F4',
    height: '40%',
    enterMode :2,
    fillEmptyBlocks : false,
    tabSpaces :0

  };
  constructor(public mainService:MainService, private router:Router) { }

  ngOnInit() {
    this.addBannerForm = new FormGroup({
      'title': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),

      "description":new FormControl('', Validators.required),
      "bannerFile": new FormControl('',Validators.required),
      "sideImage": new FormControl('',Validators.required)
    });
  }
  addNewBanner(){
    let url = 'admin/addPractitionerLoginScreen'

    let data =
      {

        'title': this.addBannerForm.value.title,
        'description': this.addBannerForm.value.description,
        'bannerImage': this.profile,
        'sideImage': this.SideImage
      }
      this.mainService.showSpinner();
      this.mainService.postApi(url, data, 1).subscribe((res: any) => {
        console.log("Practioner response ==>", res)
        if (res.responseCode == 200 && res.result) {

          this.mainService.hideSpinner();
          this.mainService.successToast(res.responseMessage)
          this.router.navigate(['/login-screen-content'])
          this.addBannerForm.reset()


        } else {
          this.mainService.hideSpinner();
          this.mainService.errorToast(res.responseMessage)
        }
        error => {
          this.mainService.hideSpinner();
          this.mainService.errorToast('Something went wrong')
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
}
//For Side Image Upload

SideImageInput(e) {

  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

  var reader = new FileReader();
  reader.onload = this._SideImageLoaded.bind(this);
  reader.readAsDataURL(file);
}
_SideImageLoaded(e) {
  let reader = e.target;
    this.SideImage = reader.result;
}
}
