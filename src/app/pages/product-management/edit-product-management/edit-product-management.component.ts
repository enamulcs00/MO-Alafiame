import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product-management',
  templateUrl: './edit-product-management.component.html',
  styleUrls: ['./edit-product-management.component.css']
})
export class EditProductManagementComponent implements OnInit {
  productId: string;
  editproductForm: FormGroup;
  image: any= 'assets/img/profile-img.jpg';
  fileToupload: File= null;

  constructor(private actRoute:ActivatedRoute,private route:Router,public mainService: MainService) { 
    
     
    this.editproductForm = new FormGroup({
      productName: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      UsedFor: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required])
     })
  }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log("productId",this.productId);
    });
  }
  handleFileInput(file: FileList)
  {
    this.fileToupload = file.item(0);
        var reader = new FileReader();
        reader.onload = (event : any) =>{
          this.image = event.target.result;
        }
        reader.readAsDataURL(this.fileToupload);

  }
  editProduct()
  {
    this.mainService.showSpinner();
    let data = 
    {
      'productId': this.productId,
      'productName': this.editproductForm.value.productName,
      'price': this.editproductForm.value.price,
      'usedFor ': this.editproductForm.value.UsedFor,
      'type ': this.editproductForm.value.type
      

    }
    
    this.mainService.putApi('admin/editProduct', data, 1).subscribe((res: any) => {
      console.log("editProduct response ==>", res)
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
