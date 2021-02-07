import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';


@Component({
  selector: 'app-edit-expert',
  templateUrl: './edit-expert.component.html',
  styleUrls: ['./edit-expert.component.css']
})
export class EditExpertComponent implements OnInit {

  EditBannerForm: FormGroup
  profile = ''
  BannerEditId:any;
  bannerFormValues:any = []
  marked = false;
  theCheckbox = false;
  config = {
    uiColor: '#F0F3F4',
    height: '40%',
    forcePasteAsPlainText:true,
   enterMode:2,
   removeFormatAttributes:'',
   disallowedContent:true,
    autoParagraph:false,
    forceEnterMode:true,
    fillEmptyBlocks:false,
    tabSpaces:0,
    entities:false,
    basicEntities:false,


  };
    constructor(private router: Router, public mainService: MainService, private activateRoute:ActivatedRoute) { }

    ngOnInit() {
      this.activateRoute.params.subscribe((url:any)=>{
        this.BannerEditId = url.id;
        console.log('This is editId',url.id)
      })
  this.SetBannerItemInEditForm()

      this.EditBannerForm = new FormGroup({
        'title': new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]),

        "description":new FormControl('', Validators.required),
        "bannerFile": new FormControl('',Validators.required)
      });
    }


    EditBanner(){
      let url = 'admin/editExpert'

      let data =
        {
          '_id': this.BannerEditId,
          'active'  :this.marked,
          'expertDescription':this.EditBannerForm.value.description,
          'experTitle': this.EditBannerForm.value.title,
        'expertImage': this.profile,

        }
        this.mainService.showSpinner();
        this.mainService.putApi(url, data, 1).subscribe((res: any) => {
          console.log("EditBanner  response ==>", res)
          this.mainService.hideSpinner();
          if (res.responseCode == 200 && res.result) {
            this.mainService.successToast(res.responseMessage)
            this.router.navigate(['/expert-details'])
            this.EditBannerForm.reset()

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
    SetBannerItemInEditForm(){
      this.mainService.showSpinner();
      this.mainService.getApi(`admin/viewExpert/${this.BannerEditId}`, 1).subscribe((res: any) => {
      console.log('View Banner Details',res.result)
      this.mainService.hideSpinner();
        if (res.responseCode == 200) {

          this.theCheckbox = res.result.active
          this.profile = res.result.expertImage
          this.EditBannerForm.patchValue({
            'title': res.result.experTitle,
            'description': res.result.expertDescription
          });
         } else {

          this.mainService.errorToast(res.responseMessage)
        }
      },
      error=>{
        this.mainService.hideSpinner()
        this.mainService.errorToast('Something went wrong');
      })

    }
    toggleVisibility(e){
      this.marked= e.target.checked;
    }

}
