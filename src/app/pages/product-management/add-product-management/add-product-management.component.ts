import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-management',
  templateUrl: './add-product-management.component.html',
  styleUrls: ['./add-product-management.component.css']
})
export class AddProductManagementComponent implements OnInit {
  addproductForm: FormGroup;
  image: any= 'assets/img/profile-img.jpg';

  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) {
    this.addproductForm = new FormGroup({
      productName: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      UsedFor: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required])
     })
 }

  ngOnInit() {
  }

  addProduct()
  {
    let data = 
    {
      'productName': this.addproductForm.value.productName,
      'price': this.addproductForm.value.price,
      'usedFor ': this.addproductForm.value.UsedFor,
      'type ': this.addproductForm.value.type,
      'categoryId': "string"

    }
    this.mainService.showSpinner();
    this.mainService.postApi('admin/addProduct', data, 1).subscribe((res: any) => {
      console.log("addProduct response ==>", res)
      if (res.responseCode == 200) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        this.route.navigateByUrl('product-management')
        
      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
      error => {
        this.mainService.hideSpinner();
        this.mainService.errorToast(error.responseMessage)
      }
    })
  }

  

}
