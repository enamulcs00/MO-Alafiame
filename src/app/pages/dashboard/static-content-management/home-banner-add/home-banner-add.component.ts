import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-home-banner-add',
  templateUrl: './home-banner-add.component.html',
  styleUrls: ['./home-banner-add.component.css']
})
export class HomeBannerAddComponent implements OnInit {

  addBannerForm:FormGroup;
  profile = ''
  config = {
    uiColor: '#F0F3F4',
    height: '40%',

  };
  constructor(public mainService:MainService, private router:Router) { }

  ngOnInit() {
    this.addBannerForm = new FormGroup({
      'title': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),

      "description":new FormControl('', Validators.required),
      "bannerFile": new FormControl('',Validators.required)
    });
  }
  addNewBanner(){
    let url = 'admin/addHomeScreen'

    let data =
      {
        'active': true,
        'title': this.addBannerForm.value.title,
        'description': this.addBannerForm.value.description,
        'image': this.profile,
      }
      this.mainService.showSpinner();
      this.mainService.postApi(url, data, 1).subscribe((res: any) => {
        console.log("AddBanner  response ==>", res)
        if (res.responseCode == 200 && res.result) {

          this.mainService.hideSpinner();
          this.mainService.successToast(res.responseMessage)
          this.router.navigate(['/home-banner'])
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
  console.log("profile", this.profile)
}
}
