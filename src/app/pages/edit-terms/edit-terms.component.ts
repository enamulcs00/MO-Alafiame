import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/provider/main.service';

@Component({
  selector: 'app-edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.css']
})
export class EditTermsComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit() {
  }
termEdit(){
  let object = {
    "title":"",
    "Description":""
  }
  let channel = "static/editStaticPage"
  this.mainService.putApi(channel,object,1).subscribe((res:any)=>
  {
    console.log('This is Edit Terms',res);
  })
}
}
