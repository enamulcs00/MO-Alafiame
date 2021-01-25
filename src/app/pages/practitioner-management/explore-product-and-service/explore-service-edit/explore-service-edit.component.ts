import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-explore-service-edit',
  templateUrl: './explore-service-edit.component.html',
  styleUrls: ['./explore-service-edit.component.css']
})
export class ExploreServiceEditComponent implements OnInit {

  EditBannerForm: FormGroup
  profile = ''
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
      let url = 'admin/editPractitionerScreen'

      let data =
        {
          '_id': this.BannerEditId,

          'description':this.EditBannerForm.value.description,
          'title': this.EditBannerForm.value.title,
          'image': this.profile,
        }
        this.mainService.showSpinner();
        this.mainService.putApi(url, data, 1).subscribe((res: any) => {
          console.log("Update Practioner  response ==>", res)
          this.mainService.hideSpinner();
          if (res.responseCode == 200 && res.result) {


            this.mainService.successToast(res.responseMessage)
            this.router.navigate(['/explore-service'])
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
      this.mainService.getApi(`admin/viewPractitionerScreen/${this.BannerEditId}`, 1).subscribe((res: any) => {
      console.log('View Banner Details',res.result)
      this.mainService.hideSpinner();
        if (res.responseCode == 200) {
          this.bannerFormValues = res.result;
          this.profile = this.bannerFormValues.image
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

}
