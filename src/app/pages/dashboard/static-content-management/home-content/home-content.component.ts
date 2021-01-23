import { MainService } from './../../../../provider/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
SectionList:any;
  constructor(private service:MainService) { }

  ngOnInit() {
    this.getSectionList()
  }
getSectionList(){
  let url ='admin/listHomeTypeScreen'
this.service.showSpinner()
this.service.getApi(url,1).subscribe((res:any)=>{
this.service.hideSpinner()
console.log("This is Section List",res.result)
if(res.responseCode ==200){
this.SectionList = res.result
this.service.successToast(res.responseMessage)
}
else{
  this.service.errorToast(res.responseMessage);
}
},err=>{
  this.service.hideSpinner()
  this.service.errorToast('Somthing went wrong')
}
)
}
}
