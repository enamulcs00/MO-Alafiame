import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-view-expert',
  templateUrl: './view-expert.component.html',
  styleUrls: ['./view-expert.component.css']
})
export class ViewExpertComponent implements OnInit {
desc:any
tagFree:any
  profile = ''
  BannerEditId:any;
  bannerFormValues:any = []
  constructor(private router: Router, public mainService: MainService, private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((url:any)=>{
      this.BannerEditId = url.id;
    })
    this.SetBannerItemInEditForm()
  }
  SetBannerItemInEditForm(){
    this.mainService.showSpinner();
    this.mainService.getApi(`admin/viewExpert/${this.BannerEditId}`, 1).subscribe((res: any) => {
    console.log('View Banner Details',res.result)
    this.mainService.hideSpinner();
      if (res.responseCode == 200) {
        this.bannerFormValues = res.result;
        this.profile = this.bannerFormValues.expertImage
        this.desc = this.bannerFormValues.expertDescription
      this.tagFree=  this.desc.replace(/(<([^>]+)>)/ig,"")

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
