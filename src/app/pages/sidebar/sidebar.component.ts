import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/provider/main.service';
declare var $: any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showSidebar: boolean
  currentUrl: any;
  profileImage: any;
  profileData: any;
  showLogo: boolean = false;
  permission: any;
  vendorPermission: any=[];
  vendorManagement: boolean=false;
  giftCardManagement: boolean=false;
  serviceManagement: boolean=false;
  notificationManagement: boolean=false;
  transactionManagement: boolean=false;
  dashboardManagement: boolean=false;
  productManagement: boolean=false;
  staticContentManagement: boolean=false;
  permissions: any=[];
  role: any;
  constructor(public mainService: MainService, private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = '/' + e.url.split('/')[1];
        if (this.currentUrl === '/' || this.currentUrl === '/login' || this.currentUrl == '/forgot-password') {
          if (localStorage.getItem('token')) { this.router.navigate(['dashboard']) }
        }
      }
    });
  }

  showadmin(event) {
    console.log('event', event);
    if (this.showLogo == false) {
      if ((document.getElementById("admin").style.width = "45px")) {
        document.getElementById("admin").style.display = "none";
        this.showLogo = true;
      }
    }
  }

  ngOnInit() {
   
    $('.btn-toggle,.close_panel').click(() => {
      $('body').toggleClass('toggle-wrapper');
    });
    this.mainService.loginStatus.subscribe((res: boolean) => console.log("status", this.showSidebar = res))
    if (localStorage.getItem('token')) {
      this.showSidebar = true;
      this.getProfile();
      this.role=localStorage.getItem('userType')
      console.log(this.role)
    }
    this.mainService.loginData.subscribe((res: any) => {
      if (res) { this.profileData = res }
      this.getProfile();
      this.role=localStorage.getItem('userType')
    })
  
  }

 

  // get profile
  getProfile() {
    this.mainService.showSpinner()
    this.mainService.getApi('user/getProfile', 1).subscribe((res: any) => {
      console.log("sidebar profile response ==>", res);
      if (res.responseCode == 200) {
        this.permissions=[]
        this.vendorPermission=[]
        this.profileData = res.result;
        this.mainService.hideSpinner();
        this.vendorPermission=res.result.permissions
        console.log(this.vendorPermission)
        for (let i in this.vendorPermission){
          if(this.vendorPermission[i]==true){
            this.permissions.push(i);
          }
        }
      
        console.log(this.permissions)
        for (let i of this.permissions){
          if (i== 'vendorManagement') {
           this.vendorManagement=true
          }
          else if (i== 'transactionManagement' ) {
            this.transactionManagement=true
            }
          else if (i== 'dashboardManagement') {
            this.dashboardManagement=true
          }
          else if (i== 'productManagement') {
            this.productManagement=true
          }
          else if (i== 'serviceManagement') {
            this.serviceManagement=true
          }
          else if (i== 'notificationManagement') {
            this.notificationManagement=true
          }
          else if (i== 'giftCardManagement') {
            this.giftCardManagement=true
          }
          else if (i== 'staticContentManagement') {
            this.staticContentManagement=true
          }
         }
      } else {
        this.mainService.hideSpinner();
      }
    },(error)=>{
      this.mainService.hideSpinner();
      this.mainService.errorToast('something went wrong ')
    })
  }

  adminProfile() {
    this.router.navigate(['my-profile'])
  }

  logOutModal() {
    $('#logoutModal').modal('show')
  }

  logout() {
        $('#logoutModal').modal('hide')
    this.mainService.logout()
  }

}
