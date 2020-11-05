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
  addGift(){
    let data={
      'title':this.addGiftForm.value.title,
      'discount': this.addGiftForm.value.discount,
      'maxAmount': this.addGiftForm.value.maxAmount,
      'expiryDate':Math.round(new Date(this.addGiftForm.value.expiry).getTime()) ,
      'giftImage' :this.addGiftForm.value.image,
    }
    console.log(data)
    this.service.postApi('admin/addGift',data,1).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
