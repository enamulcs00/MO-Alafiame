import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validator, Validators} from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {
  addGiftForm: FormGroup;
  file: any = [];
  imageType: any;
  imgUrl: any;
  constructor(private service:MainService) { }

  ngOnInit() {
    this.addGiftForm = new FormGroup({
      'title': new FormControl('',Validators.required),
      'discount': new FormControl('',Validators.required),
      'maxAmount': new FormControl('',Validators.required),
      'expiry': new FormControl('',Validators.required),
      'image': new FormControl('',Validators.required),
    })
  }
  // convertimg(event) {
  //   this.file = event.target.files;
  //   console.log("hdsfghsdfhsdfghsdfg", this.file)
  //   if (this.file[0]) {
  //     this.imageType = this.file[0].type;
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       console.log("fdgsdfgs", e)
  //       this.imgUrl = e.target.result;
  //       console.log(this.imgUrl)
  //     };
  //     reader.readAsDataURL(this.file[0]);
  //   }
  // }

  convertimg(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imgUrl = reader.result;
    console.log("profile", this.imgUrl)
  }
  
  addGift(){
    this.service.showSpinner()
    let data={
      'title':this.addGiftForm.value.title,
      'discount': this.addGiftForm.value.discount,
      'maxAmount': this.addGiftForm.value.maxAmount,
      'expiryDate':Math.round(new Date(this.addGiftForm.value.expiry).getTime()),
      'giftImage' :this.imgUrl,
    }
    console.log(data)
    this.service.postApi('admin/addGift',data,1).subscribe((res:any)=>{
     if(res.responseCode==200){
       this.service.hideSpinner()
      this.service.successToast(res.responseMessage)
     }else{
       this.service.hideSpinner()
       this.service.errorToast(res.message)
     }
    })
  }
}
