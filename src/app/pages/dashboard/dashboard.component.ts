import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/provider/main.service';
import { ApiUrls } from 'src/app/config/api-urls/api-urls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  totalUser: any;
  totalPractioner: any;
  totalService: any;
  totalProduct: any;
  totalCorporate: any;

  constructor(public mainService: MainService) { }

  ngOnInit() {
    //this.getDashboard();
    this.getUser();
    this.getPractioner();
    this.getService();
    this.getProducts();
    this.getCorporate();
  }

  // total users
  getUser(){
    this.mainService.showSpinner();
    let data ={

    }
    this.mainService.postApi('admin/listUsers','', 1).subscribe((res:any)=>{

      if(res.responseCode==200){
        this.mainService.hideSpinner();
        this.totalUser=res.result.total
      }
      else{
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }
    },(error:any)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage);
      })
  }

  // total corporate customer
  getCorporate(){
    this.mainService.showSpinner();
    let data ={}
    this.mainService.postApi('admin/corporateList','', 1).subscribe((res:any)=>{

      if(res.responseCode==200){
        this.mainService.hideSpinner();
        this.totalCorporate=res.result.total;
        }
        else{
          this.mainService.hideSpinner()
          this.mainService.errorToast(res.responseMessage)
        }

    },(error:any)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage);
      })
  }
// total practioner
  getPractioner(){
    this.mainService.showSpinner();
    let data ={

    }
    this.mainService.postApi('admin/practitionerList','', 1).subscribe((res:any)=>{

      if(res.responseCode==200){
        this.mainService.hideSpinner();
        this.totalPractioner=res.result.total
      }
      else{
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }
    },(error:any)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage);
      })
  }

  // total service
  getService(){
    this.mainService.showSpinner();
    let data ={

    }
    this.mainService.postApi('admin/serviceList','', 1).subscribe((res:any)=>{

      if(res.responseCode==200){
        this.mainService.hideSpinner();
        this.totalService=res.result.total
        console.log("f", this.totalUser);
      }
      else{
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }

    },(error:any)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage);
      })
  }

  // total products
  getProducts(){
    this.mainService.showSpinner();
    let data ={

    }
    this.mainService.postApi('admin/productList','', 1).subscribe((res:any)=>{

      if(res.responseCode==200){
        this.mainService.hideSpinner();
        this.totalProduct=res.result.total
        console.log("f", this.totalUser);

      }
      else{
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }
    },(error:any)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage);
      })
  }

  // get dashboard data
  getDashboard() {
    this.mainService.showSpinner();
    this.mainService.getApi(ApiUrls.dashboard, 1).subscribe((res: any) => {
      console.log("dashboard response ==>", res)
      if (res.responseCode == 200) {
        this.dashboardData = res.result ? res.result : ''
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage);
      } else if (res.responseCode == 401) {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage);
        this.mainService.logout();
      }
      else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
    },(error:any)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage);
      }
    )
  }

}
