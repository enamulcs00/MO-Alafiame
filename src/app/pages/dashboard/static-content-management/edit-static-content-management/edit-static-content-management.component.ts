import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
import { ApiUrls } from 'src/app/config/api-urls/api-urls';

@Component({
  selector: 'app-edit-static-content-management',
  templateUrl: './edit-static-content-management.component.html',
  styleUrls: ['./edit-static-content-management.component.css']
})
export class EditStaticContentManagementComponent implements OnInit {
  userId: any;
  result: any;
  profile = ''
  expertImage= ''
  config = {
    uiColor: '#F0F3F4',
    height: '50%',
    enterMode :2

  };
  form: FormGroup;
  editorValue;
  type: any;

  constructor(private activatedroute: ActivatedRoute, private router: Router, public mainService: MainService) { }

  ngOnInit() {
    this.activatedroute.params.subscribe((res) => {
      this.userId = res.id;
      this.type = res.type
      if(res.type=='T&C'){
        this.type = encodeURIComponent('T&C')
      }
      console.log('userId', this.userId, this.type, res);

    });
    this.form = new FormGroup({
      "editorValue": new FormControl('', ([Validators.required])),
      "Title": new FormControl('', ([Validators.required, Validators.minLength(3), Validators.pattern(/^[^\s][A-Za-z&\s]*$/)])),
      "ExDescription": new FormControl('', ([Validators.required])),
      "ExTitle": new FormControl('', ([Validators.required, Validators.minLength(3), Validators.pattern(/^[^\s][A-Za-z&\s]*$/)]))
    });
    this.viewStaticData()
  }

  viewStaticData() {
    this.mainService.showSpinner();
    this.mainService.getApi(`static/viewStaticPage?type=${this.type}`, 1).subscribe((res: any) => {
      console.log("get static content management list response ==>", res)
      if (res.responseCode == 200) {
        this.result = res.result;
        setTimeout(() => {
          this.form.patchValue({
            Title: this.result.title,
            ExTitle:this.result.ourExperties.experTitle,
            editorValue: this.result.description,
            ExDescription:this.result.ourExperties.expertDescription
          });
          this.profile = this.result.image
          this.mainService.hideSpinner();
        }, 1000);

        this.mainService.successToast(res.responseMessage);
      } else {

        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    })
  }

  Update() {
    console.log('UserId',this.userId);
    const description = this.form.value.editorValue
    const expDesc = this.form.value.ExDescription
    let data = {
      '_id': this.userId,
      "title": this.form.value.Title,
      "image": this.profile,
      "expertImage": this.expertImage,
      "experTitle": this.form.value.ExTitle,
      "expertDescription": expDesc.slice(3, (expDesc.length - 5)),
      "description": description.slice(3, (description.length - 5))
    }
    console.log('data', data)
    this.mainService.showSpinner();
    this.mainService.putApi(`static/editStaticPage`, data, 1).subscribe((res: any) => {
      console.log("edit static content management response ==>", res)
      if (res.responseCode == 200) {
        this.mainService.successToast(res.responseMessage);
       this.router.navigate(['/static-content-management'])
      } else {

        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    },err=>{
      this.mainService.hideSpinner();
        this.mainService.errorToast('Something went wrong')
    }
    )
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
      this.expertImage = reader.result;
  }
}
