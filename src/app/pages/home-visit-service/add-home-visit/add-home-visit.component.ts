import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-home-visit',
  templateUrl: './add-home-visit.component.html',
  styleUrls: ['./add-home-visit.component.css']
})
export class AddHomeVisitComponent implements OnInit {
  addhomeForm: FormGroup;
  profile: any;
  user: any;

marked = false;
  theCheckbox = false;
  constructor(private actRoute:ActivatedRoute,private route:Router,public mainService: MainService) {

   }

  ngOnInit() {
    this.addhomeForm = new FormGroup({
      "categoryName": new FormControl('', Validators.required),

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
    console.log("profile", this.profile)
  }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  addservice()
  {

    let data =
    {
      'categoryName': this.addhomeForm.value.categoryName,
       'markAs': this.marked,
      'categoryImage': this.profile,

    }
    this.mainService.showSpinner();
    this.mainService.postApi('admin/addServiceCategory', data, 1).subscribe((res: any) => {
      console.log("addHomeService response ==>", res)
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
  markas(event){
console.log('Event',event)
  }
}
