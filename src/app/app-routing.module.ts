import { RefferalViewComponent } from './pages/refferal/refferal-view/refferal-view.component';
import { RefferalManagementComponent } from './pages/refferal/refferal-management/refferal-management.component';
import { ExploreProductViewComponent } from './pages/practitioner-management/explore-product-and-service/explore-product-view/explore-product-view.component';
import { ExploreProductEditComponent } from './pages/practitioner-management/explore-product-and-service/explore-product-edit/explore-product-edit.component';
import { ExploreProductAddComponent } from './pages/practitioner-management/explore-product-and-service/explore-product-add/explore-product-add.component';
import { ExploreProductComponent } from './pages/practitioner-management/explore-product-and-service/explore-product/explore-product.component';
import { ExploreServiceViewComponent } from './pages/practitioner-management/explore-product-and-service/explore-service-view/explore-service-view.component';
import { ExploreServiceEditComponent } from './pages/practitioner-management/explore-product-and-service/explore-service-edit/explore-service-edit.component';
import { ExploreServiceAddComponent } from './pages/practitioner-management/explore-product-and-service/explore-service-add/explore-service-add.component';
import { ExploreServiceComponent } from './pages/practitioner-management/explore-product-and-service/explore-service/explore-service.component';
import { BookPractionerViewComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-view/book-practioner-view.component';
import { BookPractionerEditComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-edit/book-practioner-edit.component';
import { BookPractionerAddComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-add/book-practioner-add.component';
import { BookPractionerListComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-list/book-practioner-list.component';
import { ViewLoginContentComponent } from './pages/dashboard/login-screen-content/view-login-content/view-login-content.component';
import { EditLoginContentComponent } from './pages/dashboard/login-screen-content/edit-login-content/edit-login-content.component';
import { AddLoginContentComponent } from './pages/dashboard/login-screen-content/add-login-content/add-login-content.component';
import { LoginScreenContentComponent } from './pages/dashboard/login-screen-content/login-screen-content.component';
import { HomeBannerViewComponent } from './pages/dashboard/static-content-management/home-banner-view/home-banner-view.component';
import { HomeBannerEditComponent } from './pages/dashboard/static-content-management/home-banner-edit/home-banner-edit.component';
import { HomeBannerAddComponent } from './pages/dashboard/static-content-management/home-banner-add/home-banner-add.component';
import { HomeBannerComponent } from './pages/dashboard/static-content-management/home-banner/home-banner.component';
import { HomeSectionComponent } from './pages/dashboard/static-content-management/home-section/home-section.component';
import { EditSectionComponent } from './pages/dashboard/static-content-management/edit-section/edit-section.component';
import { ViewSectionComponent } from './pages/dashboard/static-content-management/view-section/view-section.component';
import { AddSectionComponent } from './pages/dashboard/static-content-management/add-section/add-section.component';
import { HomeContentComponent } from './pages/dashboard/static-content-management/home-content/home-content.component';
import { AddSubServiceComponent } from './pages/home-visit-service/add-sub-service/add-sub-service.component';
import { EditBannerComponent } from './pages/banner-management/edit-banner/edit-banner.component';
import { ViewBannerComponent } from './pages/banner-management/view-banner/view-banner.component';
import { AddBannerComponent } from './pages/banner-management/add-banner/add-banner.component';
import { BannerManagementComponent } from './pages/banner-management/banner-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChangePasswordComponent } from './pages/dashboard/change-password/change-password.component';
import { FaqComponent } from './pages/dashboard/faq/faq/faq.component';
import { AddFaqComponent } from './pages/dashboard/faq/add-faq/add-faq.component';
import { EditFaqComponent } from './pages/dashboard/faq/edit-faq/edit-faq.component';
import { ViewFaqComponent } from './pages/dashboard/faq/view-faq/view-faq.component';
import { HelplineNumberComponent } from './pages/dashboard/helpline-number/helpline-number/helpline-number.component';
import { AddNumberComponent } from './pages/dashboard/helpline-number/add-number/add-number.component';
import { EditNumberComponent } from './pages/dashboard/helpline-number/edit-number/edit-number.component';
import { HospitalManagementComponent } from './pages/dashboard/hospital-management/hospital-management/hospital-management.component';
import { AddHospitalComponent } from './pages/dashboard/hospital-management/add-hospital/add-hospital.component';
import { EditHospitalComponent } from './pages/dashboard/hospital-management/edit-hospital/edit-hospital.component';
import { MyProfileComponent } from './pages/dashboard/my-profile/my-profile/my-profile.component';
import { EditMyProfileComponent } from './pages/dashboard/my-profile/edit-my-profile/edit-my-profile.component';
import { NotificationManagementComponent } from './pages/dashboard/notification-management/notification-management.component';
import { StaticContentManagementComponent } from './pages/dashboard/static-content-management/static-content-management/static-content-management.component';
import { EditStaticContentManagementComponent } from './pages/dashboard/static-content-management/edit-static-content-management/edit-static-content-management.component';
import { TestCenterManagementComponent } from './pages/dashboard/test-center-management/test-center-management/test-center-management.component';
import { AddTestCenterComponent } from './pages/dashboard/test-center-management/add-test-center/add-test-center.component';
import { EditTestCenterComponent } from './pages/dashboard/test-center-management/edit-test-center/edit-test-center.component';
import { UserManagementComponent } from './pages/dashboard/user-management/user-management/user-management.component';
import { EditUserComponent } from './pages/dashboard/user-management/edit-user/edit-user.component';
import { ViewUserComponent } from './pages/dashboard/user-management/view-user/view-user.component';
// import { ViewHospitalComponent } from './pages/dashboard/hospital-management/view-hospital/view-hospital/view-hospital.componen} from './guard/auth.guard';
import { ViewTestCenterComponent } from './pages/dashboard/test-center-management/view-test-center/view-test-center/view-test-center.component';
import { ViewPatientManagementHospitalComponent } from './pages/dashboard/hospital-management/view-hospital/view-patient-management-hospital/view-patient-management-hospital.component';
import { ViewPlasmaDonatedPatientManagementHospitalComponent } from './pages/dashboard/hospital-management/view-hospital/view-plasma-donated-patient-management-hospital/view-plasma-donated-patient-management-hospital.component';
import { ViewPatientManagementTestCenterComponent } from './pages/dashboard/test-center-management/view-test-center/view-patient-management-test-center/view-patient-management-test-center.component';
//import { ViewPlasmaDonatedPatientManagementTestCenterComponent } from './pages/dashboard/test-center-management/view-test-center/view-plasma-donated-patient-management-test-center/view-plasma-donated-patient-management-test-center.component';
import { ViewHospitalComponent } from './pages/dashboard/hospital-management/view-hospital/view-hospital/view-hospital.component';
import { AddUserComponent } from './pages/dashboard/user-management/add-user/add-user.component';
//import { CorporateCustomerManagementComponent } from './pages/corporate-customer-management/corporate-customer-management.component';
import { AddCorporateCustomerComponent } from './pages/corporate-customer-management/add-corporate-customer/add-corporate-customer.component';
import { EditCorporateCustomerComponent } from './pages/corporate-customer-management/edit-corporate-customer/edit-corporate-customer.component';
import { ViewCorporateCustomerComponent } from './pages/corporate-customer-management/view-corporate-customer/view-corporate-customer.component';
import { PractitionerManagementComponent } from './pages/practitioner-management/practitioner-management.component';
import { AddPractitionerComponent } from './pages/practitioner-management/add-practitioner/add-practitioner.component';
import { EditPractitionerComponent } from './pages/practitioner-management/edit-practitioner/edit-practitioner.component';
import { ViewPractitionerComponent } from './pages/practitioner-management/view-practitioner/view-practitioner.component';
import { ViewCompaniesComponent } from './pages/view-companies/view-companies.component';
import { ViewCompaniesEditComponent } from './pages/view-companies/view-companies-edit/view-companies-edit.component';
import { ViewCompaniesViewComponent } from './pages/view-companies/view-companies-view/view-companies-view.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { AddProductManagementComponent } from './pages/product-management/add-product-management/add-product-management.component';
import { EditProductManagementComponent } from './pages/product-management/edit-product-management/edit-product-management.component';
import { ViewProductManagementComponent } from './pages/product-management/view-product-management/view-product-management.component';
import { GiftCardManagementComponent } from './pages/gift-card-management/gift-card-management.component';
import { AddGiftComponent } from './pages/gift-card-management/add-gift/add-gift.component';
import { EditGiftComponent } from './pages/gift-card-management/edit-gift/edit-gift.component';
import { HomeVisitServiceComponent } from './pages/home-visit-service/home-visit-service.component';
import { AddHomeVisitComponent } from './pages/home-visit-service/add-home-visit/add-home-visit.component';
import { EditHomeVisitComponent } from './pages/home-visit-service/edit-home-visit/edit-home-visit.component';
import { ViewHomeVisitComponent } from './pages/home-visit-service/view-home-visit/view-home-visit.component';
import { AddNotificationComponent } from './pages/dashboard/notification-management/add-notification/add-notification.component';
import { ViewNotificationComponent } from './pages/dashboard/notification-management/view-notification/view-notification.component';
import { OtpComponent } from './pages/otp/otp.component';
import { EditAboutUsComponent } from './pages/edit-about-us/edit-about-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ViewPrivacyPolicyComponent } from './pages/view-privacy-policy/view-privacy-policy.component';
import { EditPrivacyPolicyComponent } from './pages/edit-privacy-policy/edit-privacy-policy.component';
import { ViewTermsComponent } from './pages/view-terms/view-terms.component';
import { EditTermsComponent } from './pages/edit-terms/edit-terms.component';
import { LinkManagementComponent } from './pages/link-management/link-management.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ViewProductCategoryComponent } from './pages/view-product-category/view-product-category.component';
import { EditproductCategoryComponent } from './pages/editproduct-category/editproduct-category.component';
import { AddproductCategoryComponent } from './pages/addproduct-category/addproduct-category.component';
import { VendorManagementComponent } from './pages/vendor-management/vendor-management.component';
import { ViewVendorComponent } from './pages/vendor-management/view-vendor/view-vendor.component';
import { EditVendorComponent } from './pages/vendor-management/edit-vendor/edit-vendor.component';
import { AddVendorComponent } from './pages/vendor-management/add-vendor/add-vendor.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'otp', component: OtpComponent },
  // dashboard
  { path: 'dashboard', component: DashboardComponent },
  // faq
  { path: 'faq', component: FaqComponent },
  { path: 'add-faq', component: AddFaqComponent },
  { path: 'edit-faq/:id', component: EditFaqComponent },
  { path: 'view-faq', component: ViewFaqComponent },
  // helpline number

  { path: 'helpline-number', component: HelplineNumberComponent },
  { path: 'add-number', component: AddNumberComponent },
  { path: 'edit-number', component: EditNumberComponent },
  // hospital

  { path: 'hospital-management', component: HospitalManagementComponent },
  { path: 'add-hospital', component: AddHospitalComponent },
  { path: 'edit-hospital', component: EditHospitalComponent },
  { path: 'view-hospital', component: ViewHospitalComponent},
  { path: 'view-patient-management-hospital', component: ViewPatientManagementHospitalComponent },
  { path: 'view-plasma-donated-patient-management-hospital', component: ViewPlasmaDonatedPatientManagementHospitalComponent },
  // my profile


  { path: 'my-profile', component: MyProfileComponent },
  { path: 'edit-profile', component: EditMyProfileComponent },
  // notification

  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'add-notification', component: AddNotificationComponent },
  { path: 'view-notification/:id', component: ViewNotificationComponent},

  // static content management
  { path: 'static-content-management', component: StaticContentManagementComponent },
  { path: 'edit-static-content-management', component: EditStaticContentManagementComponent },
  // test center management
  {path:'home-banner',component:HomeBannerComponent},
  {path:'home-banner-add',component:HomeBannerAddComponent},
  {path:'home-banner-edit/:id',component:HomeBannerEditComponent},
  {path:'home-banner-view/:id',component:HomeBannerViewComponent},
  {path:'home-section',component:HomeSectionComponent},
{path: 'home-content',component:HomeContentComponent},
{path:'add-section',component:AddSectionComponent},
{path:'view-section/:id',component:ViewSectionComponent},
{path: 'edit-section/:id',component:EditSectionComponent},
  { path: 'hospital-management', component: HospitalManagementComponent },
  { path: 'add-hospital', component: AddHospitalComponent },
  { path: 'edit-hospital', component: EditHospitalComponent },
  // { path: 'view-hospital', component: ViewHospitalComponent },
  { path: 'view-patient-management-hospital', component: ViewPatientManagementHospitalComponent },
  { path: 'view-plasma-donated-patient-management-hospital', component: ViewPlasmaDonatedPatientManagementHospitalComponent },
  // my profile
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'edit-profile', component: EditMyProfileComponent },
  // notification
  { path: 'notification-management', component: NotificationManagementComponent },
  //about_us
  //edit_about_us
  { path: 'about_us', component: AboutUsComponent },
  { path: 'edit_about_us', component: EditAboutUsComponent },
  // static content management
  { path: 'static-content-management', component: StaticContentManagementComponent },
  { path: 'edit-static-content-management/:type/:id', component: EditStaticContentManagementComponent },
  { path: 'edit_privacy_policy', component: EditPrivacyPolicyComponent },
  { path: 'view_terms/:type', component: ViewTermsComponent },
  { path: 'edit_terms/:id', component: EditTermsComponent },

  // test center management
  { path: 'test-center-management', component: TestCenterManagementComponent },
  { path: 'add-test-center', component: AddTestCenterComponent },
  { path: 'edit-test-center', component: EditTestCenterComponent },
  { path: 'view-test-center', component: ViewTestCenterComponent },
  { path: 'view-patient-management-test-center', component: ViewPatientManagementTestCenterComponent },
  // { path: 'view-plasma-donated-patient-management-test-center', component: ViewPlasmaDonatedPatientManagementTestCenterComponent },
  // user management


  { path: 'user-management', component: UserManagementComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'view-user', component: ViewUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'banner-management',component:BannerManagementComponent},
  {path: 'add-banner', component:AddBannerComponent},
  {path: 'view-banner/:id',component:ViewBannerComponent},
  {path:'edit-banner/:id',component:EditBannerComponent},
  // { path: 'corporate-customer-management', component: CorporateCustomerManagementComponent },
  { path: 'add-corporate-customer-management', component: AddCorporateCustomerComponent },
  { path: 'edit-corporate-customer-management', component: EditCorporateCustomerComponent },
  { path: 'view-corporate-customer-management', component: ViewCorporateCustomerComponent },

  { path: 'practitioner-management', component: PractitionerManagementComponent },
  { path: 'add-practitioner', component: AddPractitionerComponent },
  { path: 'edit-practitioner/:id', component: EditPractitionerComponent },
  { path: 'view-practitioner/:id', component: ViewPractitionerComponent },

  { path: 'view-companies', component: ViewCompaniesComponent },
  { path: 'view-companies-edit', component: ViewCompaniesEditComponent },
  { path: 'view-companies-view', component: ViewCompaniesViewComponent },

  { path: 'product-management', component: ProductManagementComponent },
  { path: 'add-product-management', component: AddProductManagementComponent },
  { path: 'edit-product-management/:id', component: EditProductManagementComponent },
  { path: 'view-product-management/:id', component: ViewProductManagementComponent },

  { path: 'gift-card-management', component: GiftCardManagementComponent },
  { path: 'add-gift', component: AddGiftComponent},
  { path: 'edit-gift/:id', component: EditGiftComponent },

  { path: 'home-visit-service', component: HomeVisitServiceComponent },
  { path: 'add-home-visit', component: AddHomeVisitComponent },
  { path: 'edit-home-visit/:id', component: EditHomeVisitComponent },
  { path: 'view-home-visit/:id', component: ViewHomeVisitComponent },
  {path: 'add-sub-service', component:AddSubServiceComponent},
  { path: 'link-management', component: LinkManagementComponent },
  { path: 'product-category', component: ProductCategoryComponent },
  { path: 'view-productcategory/:id', component: ViewProductCategoryComponent },
  { path: 'edit-productcategory/:id', component: EditproductCategoryComponent },
  { path: 'add-productcategory', component: AddproductCategoryComponent },

  { path: 'vendor-management', component: VendorManagementComponent },
  { path: 'view-vendor/:id', component: ViewVendorComponent },
  { path: 'edit-vendor/:id', component: EditVendorComponent },
  { path: 'add-vendor', component: AddVendorComponent },
{path:'login-screen-content',component:LoginScreenContentComponent},
{path:'add-login-content',component:AddLoginContentComponent},
{path:'edit-login-content/:id',component:EditLoginContentComponent},
{path:'view-login-content/:id',component:ViewLoginContentComponent},
{path:'book-practioner-list',component:BookPractionerListComponent},
{path:'book-practioner-add',component:BookPractionerAddComponent},
{path:'book-practioner-edit/:id',component:BookPractionerEditComponent},
{path:'book-practioner-view/:id',component:BookPractionerViewComponent},
{path:'explore-service',component:ExploreServiceComponent},
{path:'explore-service-add',component:ExploreServiceAddComponent},
{path:'explore-service-edit/:id',component:ExploreServiceEditComponent},
{path:'explore-service-view/:id',component:ExploreServiceViewComponent},
{path:'explore-product',component:ExploreProductComponent},
{path:'explore-product-add',component:ExploreProductAddComponent},
{path:'explore-product-edit/:id',component:ExploreProductEditComponent},
{path:'explore-product-view/:id',component:ExploreProductViewComponent},
{path:'referral-management',component:RefferalManagementComponent},
{path:'referral-view/:id',component:RefferalViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
