import { Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sub-service',
  templateUrl: './add-sub-service.component.html',
  styleUrls: ['./add-sub-service.component.css']
})
export class AddSubServiceComponent implements OnInit {
  addSubServiceForm: FormGroup;
  profile = ''
  ServiceId:any;
  constructor(public mainService:MainService, private router:Router) { }

  ngOnInit() {
    // this.addSubServiceForm = new FormGroup({
    //   'SubCategoryName': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),
    // });
  }

  addSubService(){
    let data =
    {
       'categoryId':this.ServiceId,
      'subCategoryName': this.addSubServiceForm.value.categoryName,
      'subCategoryImage': this.profile,
    }
    this.mainService.showSpinner();
    this.mainService.postApi('admin/addService', data, 1).subscribe((res: any) => {
      console.log("addSubService response ==>", res)
      this.mainService.hideSpinner();
      if (res.responseCode == 200 && res.result) {
        this.profile = ''
      this.addSubServiceForm.reset()


        this.mainService.successToast(res.responseMessage)


      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
      error => {
        this.mainService.hideSpinner();
        this.mainService.errorToast('Something went wrong')
      }
    })

   }


handleInputChange(e) {
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
}
