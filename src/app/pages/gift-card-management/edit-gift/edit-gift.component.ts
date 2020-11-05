import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validator, Validators} from '@angular/forms';
import { MainService } from 'src/app/provider/main.service';
@Component({
  selector: 'app-edit-gift',
  templateUrl: './edit-gift.component.html',
  styleUrls: ['./edit-gift.component.css']
})
export class EditGiftComponent implements OnInit {
  editGiftForm: FormGroup;

  constructor(private service:MainService) { }

  ngOnInit() {
    this.editGiftForm = new FormGroup({
      'title': new FormControl('',Validators.required),
      'discount': new FormControl('',Validators.required),
      'maxAmount': new FormControl('',Validators.required),
      'expiry': new FormControl('',Validators.required),
      'image': new FormControl('',Validators.required),
    })
  }
  editGift(){
    let data={
      'title':this.editGiftForm.value.title,
      'discount': this.editGiftForm.value.discount,
      'maxAmount': this.editGiftForm.value.maxAmount,
      'expiryDate':Math.round(new Date(this.editGiftForm.value.expiry).getTime()) ,
      'giftImage' :this.editGiftForm.value.image,
    }
    console.log(data)
   this.service.postApi('admin/editGift',data,1).subscribe((res:any)=>{
     console.log(res)
   })
  }
}