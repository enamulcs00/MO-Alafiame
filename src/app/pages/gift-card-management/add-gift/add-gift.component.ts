import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {
  addGiftForm: FormGroup;
  file: any = [];
  profile: any;
  
  constructor(private service:MainService,private router:Router) { 
    
  }

  ngOnInit() {
    this.addGiftForm = new FormGroup({
      'title': new FormControl('',Validators.required),
      'discount': new FormControl('',Validators.required),
      'maxAmount': new FormControl('',Validators.required),
      'expiry': new FormControl('',Validators.required),
      'image': new FormControl('',Validators.required),
    })
  }
  convertimg(e) {
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
  
  addGift(){
    this.service.showSpinner()
    let data={
      'title':this.addGiftForm.value.title,
      'discount': this.addGiftForm.value.discount,
      'maxAmount': this.addGiftForm.value.maxAmount,
      'expiryDate':Math.round(new Date(this.addGiftForm.value.expiry).getTime()),
      'giftImage' :this.profile
    }
    console.log(data)
    this.service.postApi('admin/addGift',data,1).subscribe((res:any)=>{
      console.log('Add Gift Details',res)
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
}
