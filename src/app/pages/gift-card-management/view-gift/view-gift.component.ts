import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-view-gift',
  templateUrl: './view-gift.component.html',
  styleUrls: ['./view-gift.component.css']
})
export class ViewGiftComponent implements OnInit {

  editGiftForm: FormGroup;
  giftId: any;
  giftlist: any;
  img: any;
  title:any;
  discount:any;
  maxAmount:any;
  expiriry:any;
  file: any;
  imageType: any;

  constructor(public service:MainService, private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
this.activatedroute.params.subscribe((res:any)=>{
  this.giftId=res.id
})
    this.giftList()

  }

  giftList() {
    this.service.showSpinner()

    this.service.getApi(`admin/viewGift/${this.giftId}`,1).subscribe((res: any) => {
      console.log('vie gigt',res)
      if(res.responseCode==200){
        this.img= res.result.giftImage
        this.title = res.result.title
        this.discount = res.result.discount
        this.expiriry = res.result.expiryDate.split('T')[0]
        this.maxAmount= res.result.maxAmount

        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
    }, (error) => {
      this.service.hideSpinner()
      this.service.errorToast('Something went wrong')
    })
  }


}
