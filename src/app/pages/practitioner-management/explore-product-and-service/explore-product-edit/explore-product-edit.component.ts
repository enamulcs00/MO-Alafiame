import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-explore-product-edit',
  templateUrl: './explore-product-edit.component.html',
  styleUrls: ['./explore-product-edit.component.css']
})
export class ExploreProductEditComponent implements OnInit {

  EditBannerForm: FormGroup
  profile:any =[]
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
      let url = 'admin/editHomeScreenOurProduct'

      let data =
        {
          "_id": this.BannerEditId,
          "title": this.EditBannerForm.value.title,
          "description":this.EditBannerForm.value.description,
          "image":  this.profile

        }
        this.mainService.showSpinner();
        this.mainService.putApi(url, data, 1).subscribe((res: any) => {
          console.log("Update Practioner  response ==>", res)
          this.mainService.hideSpinner();
          if (res.responseCode == 200 && res.result) {


            this.mainService.successToast(res.responseMessage)
            this.router.navigate(['/explore-product'])
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


    SetBannerItemInEditForm(){
      this.mainService.showSpinner();
      this.mainService.getApi(`admin/viewHomeScreenOurProduct/${this.BannerEditId}`, 1).subscribe((res: any) => {
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
    selectMediaFile(event) {
      if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.profile.push(event.target.result);

                }

                reader.readAsDataURL(event.target.files[i]);

        }
    }
  }
  removeImage(indexTodelete:number){
   this.profile.splice(indexTodelete, 1);
    // this.profile = this.profile.filter((index) => index !== indexTodelete);
     console.log('We deleted this',indexTodelete)
  }
}
