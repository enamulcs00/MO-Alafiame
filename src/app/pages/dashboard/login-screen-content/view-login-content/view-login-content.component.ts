import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-view-login-content',
  templateUrl: './view-login-content.component.html',
  styleUrls: ['./view-login-content.component.css']
})
export class ViewLoginContentComponent implements OnInit {
SideImage = ''
  profile = ''
  BannerEditId:any;
  bannerFormValues:any = []
  constructor(public mainService: MainService, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((url:any)=>{
      this.BannerEditId = url.id;
    })
    this.SetBannerItemInEditForm()
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
