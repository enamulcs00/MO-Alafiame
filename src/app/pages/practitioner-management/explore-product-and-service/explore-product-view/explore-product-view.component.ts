import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-explore-product-view',
  templateUrl: './explore-product-view.component.html',
  styleUrls: ['./explore-product-view.component.css']
})
export class ExploreProductViewComponent implements OnInit {

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
    this.mainService.getApi(`admin/viewHomeScreenOurProduct/${this.BannerEditId}`, 1).subscribe((res: any) => {
    console.log('View Banner Details',res.result)
    this.mainService.hideSpinner();
      if (res.responseCode == 200) {
        this.bannerFormValues = res.result;
        this.profile = this.bannerFormValues.image

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
