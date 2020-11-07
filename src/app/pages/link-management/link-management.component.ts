import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-link-management',
  templateUrl: './link-management.component.html',
  styleUrls: ['./link-management.component.css']
})
export class LinkManagementComponent implements OnInit {
  link: any;

  constructor(private activate:ActivatedRoute,private route:Router,public mainService: MainService) { }

  ngOnInit() {
    this.getLink();
  }
  getLink() {
    this.mainService.showSpinner();
    this.mainService.getApi('appSharing/appSharingData',1).subscribe((res: any) => {
      if (res.responseCode == 200) {
        this.link = res.result;
        // this.form.patchValue({
        //   "question": this.faqList.question,
        //   "answer": this.faqList.message
        // })
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage);
      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    })
  }

}
