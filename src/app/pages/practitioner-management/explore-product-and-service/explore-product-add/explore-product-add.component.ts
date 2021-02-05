import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-explore-product-add',
  templateUrl: './explore-product-add.component.html',
  styleUrls: ['./explore-product-add.component.css']
})
export class ExploreProductAddComponent implements OnInit {
  base64image:any;
  addBannerForm:FormGroup;
  profile = ''
  config = {
    uiColor: '#F0F3F4',
    height: '40%',
    enterMode :2
  };
  marked = false;
  theCheckbox = false;
  constructor(public mainService:MainService, private router:Router) { }

  ngOnInit() {
    this.addBannerForm = new FormGroup({
      'title': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),

      "description":new FormControl('', Validators.required),
      "bannerFile": new FormControl('',Validators.required)
    });
  }
  addNewBanner(){
    let url = 'admin/addHomeScreenOurProduct'

    let data =
      {

        "title": this.addBannerForm.value.title,
        "description": this.addBannerForm.value.description,
        'active':this.marked,
        "image": [
          this.base64image
        ]

      }
      this.mainService.showSpinner();
      this.mainService.postApi(url, data, 1).subscribe((res: any) => {
        this.mainService.hideSpinner();
        console.log("Practioner response ==>", res)
        if (res.responseCode == 200 && res.result) {


          this.mainService.successToast(res.responseMessage)
          this.router.navigate(['/explore-product'])
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
// ------------------- event media (image / video) upload --------------------- //
selectMediaFile(event) {
  const file = event.target.files && event.target.files[0];
  if (file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
  this.base64image = reader.result
  console.log(this.base64image)
  }
  }
  }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }
}
