import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-book-practioner-add',
  templateUrl: './book-practioner-add.component.html',
  styleUrls: ['./book-practioner-add.component.css']
})
export class BookPractionerAddComponent implements OnInit {
  marked = false;
  theCheckbox = false;
  addBannerForm:FormGroup;
  profile = ''
  config = {
    uiColor: '#F0F3F4',
    height: '40%',
    enterMode :2
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
    let url = 'admin/addHomeScreenBookPractitioner'

    let data =
      {

        'title': this.addBannerForm.value.title,
        'description': this.addBannerForm.value.description,
        'image': this.profile,
        'active':this.marked,
      }
      this.mainService.showSpinner();
      this.mainService.postApi(url, data, 1).subscribe((res: any) => {
        console.log("Practioner response ==>", res)
        if (res.responseCode == 200 && res.result) {

          this.mainService.hideSpinner();
          this.mainService.successToast(res.responseMessage)
          this.router.navigate(['/book-practioner-list'])
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
