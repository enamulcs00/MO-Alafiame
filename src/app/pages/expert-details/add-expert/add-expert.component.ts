import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-add-expert',
  templateUrl: './add-expert.component.html',
  styleUrls: ['./add-expert.component.css']
})
export class AddExpertComponent implements OnInit {

  marked = false;
  theCheckbox = false;
  addBannerForm:FormGroup;
  profile = ''
  config = {
    uiColor: '#F0F3F4',
    height: '40%',
    enterMode :2,
    autoParagraph:false
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
    let url = 'admin/addExpert'

    let data =
      {
        'active': this.marked,
        'experTitle': this.addBannerForm.value.title,
        'expertDescription': this.addBannerForm.value.description,
        'expertImage': this.profile,
      }
      this.mainService.showSpinner();
      this.mainService.postApi(url, data, 1).subscribe((res: any) => {
        console.log("AddBanner  response ==>", res)
        if (res.responseCode == 200 && res.result) {

          this.mainService.hideSpinner();
          this.mainService.successToast(res.responseMessage)
          this.router.navigate(['/expert-details'])
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
toggleVisibility(e){
  this.marked= e.target.checked;
}
}
