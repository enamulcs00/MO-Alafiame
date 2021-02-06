import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'
import { MainService } from 'src/app/provider/main.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-edit-gift',
  templateUrl: './edit-gift.component.html',
  styleUrls: ['./edit-gift.component.css']
})
export class EditGiftComponent implements OnInit {
  editGiftForm: FormGroup;
  giftId: any;
  giftlist: any;
  img: any;
  file: any;
  imageType: any;
  marked = false;
  theCheckbox = false;
  constructor(public service:MainService, private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
this.activatedroute.params.subscribe((res:any)=>{
  this.giftId=res.id
})
    this.giftList()
    this.editFormValidation()
  }

  giftList() {
    this.service.showSpinner()

    this.service.getApi(`admin/viewGift/${this.giftId}`, 1).subscribe((res: any) => {
      if(res.responseCode==200){
        this.img= res.result.giftImage
        this.theCheckbox = res.result.active
        this.editGiftForm.patchValue({
          'title':res.result.title,
          'discount':res.result.discount,
          'maxAmount':res.result.maxAmount,
          'expiry':res.result.expiryDate.split('T')[0],
        })
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage)
      }else{
        this.service.hideSpinner()
        this.service.errorToast(res.responseMessage)
      }
    }, (error) => {
      this.service.hideSpinner()
    })
  }
  editFormValidation(){
    this.editGiftForm = new FormGroup({
      'title': new FormControl('',Validators.required),
      'discount': new FormControl('',Validators.required),
      'maxAmount': new FormControl('',Validators.required),
      'expiry': new FormControl('',Validators.required),
      'image': new FormControl(''),
    })
  }

  ValidateFileUpload(event) {
    this.file = event.target.files;
    if (this.file[0]) {
      this.imageType = this.file[0].type;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.img = e.target.result;
      };
      reader.readAsDataURL(this.file[0]);
    }
  }

  editGift(){
    let data={
      'title':this.editGiftForm.value.title,
      'discount': this.editGiftForm.value.discount,
      'maxAmount': this.editGiftForm.value.maxAmount,
      'expiryDate':Math.round(new Date(this.editGiftForm.value.expiry).getTime()) ,
      'giftImage' :this.img,
      'giftId':this.giftId,
      'active':this.marked,
    }
    console.log(data)
   this.service.postApi('admin/editGift',data,1).subscribe((res:any)=>{
    if(res.responseCode==200){
      this.service.hideSpinner()
      this.service.successToast(res.responseMessage)
      this.router.navigate(['/gift-card-management'])
    }else{
      this.service.hideSpinner()
      this.service.errorToast(res.responseMessage)
    }
   }, (error) => {
      this.service.hideSpinner()
  })
}
toggleVisibility(e){
  this.marked= e.target.checked;
}

}
