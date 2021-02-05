import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-home-visit',
  templateUrl: './edit-home-visit.component.html',
  styleUrls: ['./edit-home-visit.component.css']
})
export class EditHomeVisitComponent implements OnInit {
  edithomeForm: FormGroup;
  profile: any;
  user: any;
  categoryId: any;

  constructor(private actRoute:ActivatedRoute,private route:Router,public mainService: MainService) {
    this.edithomeForm = new FormGroup({
      "categoryName": new FormControl('', Validators.required),

    });
   }
  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      this.viewCategory()
    });
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

  }
  viewCategory()
  {
    this.mainService.showSpinner();
    this.mainService.getApi('admin/viewCategory?categoryId='+this.categoryId,1).subscribe((res: any) => {
      console.log('This View List',res)
     if (res && res.responseCode == 200 && res.result) {
      this.user = res.result;
      this.profile= this.user.categoryImage;
       this.edithomeForm.patchValue({
         'categoryName':this.user.categoryName
       })

        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
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

EditServiceCtegory(){
  let endpoint = 'admin/editCategory'
let data =
    {
      'categoryId':this.categoryId,
      'categoryName': this.edithomeForm.value.categoryName,
      'categoryImage': this.profile,

     }
   this.mainService.showSpinner()
    this.mainService.putApi(endpoint,data,1).subscribe((res:any)=>{
      console.log('This is Edited value',res);

      if (res.responseCode == 200 && res.result) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
       this.route.navigateByUrl('/home-visit-service')

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
