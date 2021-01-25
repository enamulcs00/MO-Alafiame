import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-edit-login-content',
  templateUrl: './edit-login-content.component.html',
  styleUrls: ['./edit-login-content.component.css']
})
export class EditLoginContentComponent implements OnInit {

  EditBannerForm: FormGroup
  profile = ''
  SideImage= ''
  BannerEditId:any;
  bannerFormValues:any = []

  config = {
    uiColor: '#F0F3F4',
    height: '40%',
    enterMode :2
  };
    constructor(private router: Router, public mainService: MainService, private activateRoute:ActivatedRoute) { }

    ngOnInit() {
      this.activateRoute.params.subscribe((url:any)=>{
        this.BannerEditId = url.id;
        console.log('This is editId',url.id)
      })
  this.SetBannerItemInEditForm()

      this.EditBannerForm = new FormGroup({
        'title': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),

        "description":new FormControl('', Validators.required),
        "bannerFile": new FormControl('',Validators.required)
      });
    }


    EditBanner(){
      let url = 'admin/editPractitionerLoginScreen'

      let data =
        {
          '_id': this.BannerEditId,

          'description':this.EditBannerForm.value.description,
          'title': this.EditBannerForm.value.title,
          'bannerImage': this.profile,
        'sideImage': this.SideImage
        }
        this.mainService.showSpinner();
        this.mainService.putApi(url, data, 1).subscribe((res: any) => {
          console.log("Update Practioner  response ==>", res)
          this.mainService.hideSpinner();
          if (res.responseCode == 200 && res.result) {


            this.mainService.successToast(res.responseMessage)
            this.router.navigate(['/login-screen-content'])
            this.EditBannerForm.reset()

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
    SetBannerItemInEditForm(){
      this.mainService.showSpinner();
      this.mainService.getApi(`admin/viewPractitionerLoginScreen/${this.BannerEditId}`, 1).subscribe((res: any) => {
      console.log('View Banner Details',res.result)
      this.mainService.hideSpinner();
        if (res.responseCode == 200) {
          this.bannerFormValues = res.result;
          this.profile = this.bannerFormValues.bannerImage
        this.SideImage = this.bannerFormValues.sideImage
          this.EditBannerForm.patchValue({
            'title': this.bannerFormValues.title,

            'description': this.bannerFormValues.description
          });
         } else {

          this.mainService.errorToast(res.responseMessage)
        }
      },
      error=>{
        this.mainService.hideSpinner()
        this.mainService.errorToast('Something went wrong');
      })

    }
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
