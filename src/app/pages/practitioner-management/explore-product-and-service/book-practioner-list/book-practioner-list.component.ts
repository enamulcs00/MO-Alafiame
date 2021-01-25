import { MainService } from 'src/app/provider/main.service';
import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-book-practioner-list',
  templateUrl: './book-practioner-list.component.html',
  styleUrls: ['./book-practioner-list.component.css']
})
export class BookPractionerListComponent implements OnInit {

  SectionList:any;
  currentPage: number = 1
    itemsPerPage: number = 10
    totalItems: any;
    itemId:any
    constructor(private service:MainService) { }

    ngOnInit() {
      this.getSectionList()
    }
  getSectionList(){
    let url ='admin/listHomeScreenBookPractitioner'
  this.service.showSpinner()
  this.service.getApi(url,1).subscribe((res:any)=>{
  this.service.hideSpinner()
  console.log("This is Section ListLen",res.result.length)
  console.log('Res of HomeBanner',res)
  if(res.responseCode ==200){
  this.SectionList = res.result
  this.totalItems = res.result.length
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
  pagination(page) {
    this.currentPage = page;
    this.getSectionList()
  }
  deleteBannerModal(id) {
    this.itemId =id;
    $('#delete').modal('show')
    console.log('DeletId',id)
  }

  deleteBanner() {
    let url = 'admin/deleteHomeScreenBookPractitioner'
    let data = {
      _id: this.itemId
    }
    this.service.showSpinner();
    this.service.deleteApi(url, data, 1).subscribe((res: any) => {
      $('#delete').modal('hide')
      if (res.responseCode == 200) {
        this.service.hideSpinner()
        this.service.successToast(res.responseMessage);
        this.getSectionList()
      } else {
        this.service.hideSpinner();
        this.service.errorToast(res.responseMessage)
      }
    },
    error=>{
      this.service.hideSpinner()
      this.service.errorToast('Something went wrong');
    })
  }
}
