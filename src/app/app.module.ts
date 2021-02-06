// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CKEditorModule } from 'ngx-ckeditor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';

// component
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManagementComponent } from './pages/dashboard/user-management/user-management/user-management.component';
import { ViewUserComponent } from './pages/dashboard/user-management/view-user/view-user.component';
import { EditUserComponent } from './pages/dashboard/user-management/edit-user/edit-user.component';

import { TestCenterManagementComponent } from './pages/dashboard/test-center-management/test-center-management/test-center-management.component';
import { AddTestCenterComponent } from './pages/dashboard/test-center-management/add-test-center/add-test-center.component';
import { EditTestCenterComponent } from './pages/dashboard/test-center-management/edit-test-center/edit-test-center.component';
import { HelplineNumberComponent } from './pages/dashboard/helpline-number/helpline-number/helpline-number.component';
import { AddNumberComponent } from './pages/dashboard/helpline-number/add-number/add-number.component';
import { EditNumberComponent } from './pages/dashboard/helpline-number/edit-number/edit-number.component';
import { NotificationManagementComponent } from './pages/dashboard/notification-management/notification-management.component';
import { MyProfileComponent } from './pages/dashboard/my-profile/my-profile/my-profile.component';
import { EditMyProfileComponent } from './pages/dashboard/my-profile/edit-my-profile/edit-my-profile.component';
import { ChangePasswordComponent } from './pages/dashboard/change-password/change-password.component';
import { StaticContentManagementComponent } from './pages/dashboard/static-content-management/static-content-management/static-content-management.component';
import { EditStaticContentManagementComponent } from './pages/dashboard/static-content-management/edit-static-content-management/edit-static-content-management.component';
import { FaqComponent } from './pages/dashboard/faq/faq/faq.component';
import { AddFaqComponent } from './pages/dashboard/faq/add-faq/add-faq.component';
import { EditFaqComponent } from './pages/dashboard/faq/edit-faq/edit-faq.component';
import { ViewFaqComponent } from './pages/dashboard/faq/view-faq/view-faq.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

import { ErrorInterceptor } from './provider/interceptor/error-interceptor/error-interceptor';
import { AuthGuard } from './guard/auth.guard';
import { ViewTestCenterComponent } from './pages/dashboard/test-center-management/view-test-center/view-test-center/view-test-center.component';
import { ViewPatientManagementTestCenterComponent } from './pages/dashboard/test-center-management/view-test-center/view-patient-management-test-center/view-patient-management-test-center.component';
// import { ViewPlasmaDonatedPatientManagementTestCenterComponent } from './pages/dashboard/test-center-management/view-test-center/view-plasma-donated-patient-management-test-center/view-plasma-donated-patient-management-test-center.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
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
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { EditAboutUsComponent } from './pages/edit-about-us/edit-about-us.component';
import { ViewPrivacyPolicyComponent } from './pages/view-privacy-policy/view-privacy-policy.component';
import { EditPrivacyPolicyComponent } from './pages/edit-privacy-policy/edit-privacy-policy.component';
import { ViewTermsComponent } from './pages/view-terms/view-terms.component';
import { EditTermsComponent } from './pages/edit-terms/edit-terms.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { LinkManagementComponent } from './pages/link-management/link-management.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ViewProductCategoryComponent } from './pages/view-product-category/view-product-category.component';
import { EditproductCategoryComponent } from './pages/editproduct-category/editproduct-category.component';
import { AddproductCategoryComponent } from './pages/addproduct-category/addproduct-category.component';
import { BannerManagementComponent } from './pages/banner-management/banner-management.component';
import { VendorManagementComponent } from './pages/vendor-management/vendor-management.component';
import { ViewVendorComponent } from './pages/vendor-management/view-vendor/view-vendor.component';
import { EditVendorComponent } from './pages/vendor-management/edit-vendor/edit-vendor.component';
import { AddVendorComponent } from './pages/vendor-management/add-vendor/add-vendor.component';
import { SocialMediaManagementComponent } from './pages/social-media-management/social-media-management.component';
import { AddBannerComponent } from './pages/banner-management/add-banner/add-banner.component';
import { EditBannerComponent } from './pages/banner-management/edit-banner/edit-banner.component';
import { ViewBannerComponent } from './pages/banner-management/view-banner/view-banner.component';
import { AddSubServiceComponent } from './pages/home-visit-service/add-sub-service/add-sub-service.component';
import { HomeContentComponent } from './pages/dashboard/static-content-management/home-content/home-content.component';
import { AddSectionComponent } from './pages/dashboard/static-content-management/add-section/add-section.component';
import { ViewSectionComponent } from './pages/dashboard/static-content-management/view-section/view-section.component';
import { EditSectionComponent } from './pages/dashboard/static-content-management/edit-section/edit-section.component';
import { HomeSectionComponent } from './pages/dashboard/static-content-management/home-section/home-section.component';
import { HomeBannerComponent } from './pages/dashboard/static-content-management/home-banner/home-banner.component';
import { HomeBannerAddComponent } from './pages/dashboard/static-content-management/home-banner-add/home-banner-add.component';
import { HomeBannerEditComponent } from './pages/dashboard/static-content-management/home-banner-edit/home-banner-edit.component';
import { HomeBannerViewComponent } from './pages/dashboard/static-content-management/home-banner-view/home-banner-view.component';
import { LoginScreenContentComponent } from './pages/dashboard/login-screen-content/login-screen-content.component';
import { AddLoginContentComponent } from './pages/dashboard/login-screen-content/add-login-content/add-login-content.component';
import { EditLoginContentComponent } from './pages/dashboard/login-screen-content/edit-login-content/edit-login-content.component';
import { ViewLoginContentComponent } from './pages/dashboard/login-screen-content/view-login-content/view-login-content.component';
import { BookPractionerListComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-list/book-practioner-list.component';
import { BookPractionerAddComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-add/book-practioner-add.component';
import { BookPractionerEditComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-edit/book-practioner-edit.component';
import { BookPractionerViewComponent } from './pages/practitioner-management/explore-product-and-service/book-practioner-view/book-practioner-view.component';
import { ExploreServiceComponent } from './pages/practitioner-management/explore-product-and-service/explore-service/explore-service.component';
import { ExploreServiceAddComponent } from './pages/practitioner-management/explore-product-and-service/explore-service-add/explore-service-add.component';
import { ExploreServiceEditComponent } from './pages/practitioner-management/explore-product-and-service/explore-service-edit/explore-service-edit.component';
import { ExploreServiceViewComponent } from './pages/practitioner-management/explore-product-and-service/explore-service-view/explore-service-view.component';
import { ExploreProductComponent } from './pages/practitioner-management/explore-product-and-service/explore-product/explore-product.component';
import { ExploreProductAddComponent } from './pages/practitioner-management/explore-product-and-service/explore-product-add/explore-product-add.component';
import { ExploreProductEditComponent } from './pages/practitioner-management/explore-product-and-service/explore-product-edit/explore-product-edit.component';
import { ExploreProductViewComponent } from './pages/practitioner-management/explore-product-and-service/explore-product-view/explore-product-view.component';
import { RefferalManagementComponent } from './pages/refferal/refferal-management/refferal-management.component';
import { RefferalViewComponent } from './pages/refferal/refferal-view/refferal-view.component';
import { ViewGiftComponent } from './pages/gift-card-management/view-gift/view-gift.component';
export const MyDefaultTooltipOptions: TooltipOptions = {
  'placement': 'top',
  'show-delay': 100,
  'theme': 'light',
  'animation-duration': 1000,
  'tooltip-class': 'tooltip-class-custom'
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    UserManagementComponent,
    ViewUserComponent,
    EditUserComponent,

    TestCenterManagementComponent,
    AddTestCenterComponent,
    EditTestCenterComponent,
    HelplineNumberComponent,
    AddNumberComponent,
    EditNumberComponent,
    NotificationManagementComponent,
    MyProfileComponent,
    EditMyProfileComponent,
    ChangePasswordComponent,
    StaticContentManagementComponent,
    EditStaticContentManagementComponent,
    FaqComponent,
    AddFaqComponent,
    EditFaqComponent,
    ViewFaqComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

    ViewTestCenterComponent,
    ViewPatientManagementTestCenterComponent,
    // ViewPlasmaDonatedPatientManagementTestCenterComponent,
    AddUserComponent,
  //  CorporateCustomerManagementComponent,
    AddCorporateCustomerComponent,
    EditCorporateCustomerComponent,
    ViewCorporateCustomerComponent,
    PractitionerManagementComponent,
    AddPractitionerComponent,
    EditPractitionerComponent,
    ViewPractitionerComponent,
    ViewCompaniesComponent,
    ViewCompaniesEditComponent,
    ViewCompaniesViewComponent,
    ProductManagementComponent,
    AddProductManagementComponent,
    EditProductManagementComponent,
    ViewProductManagementComponent,
    GiftCardManagementComponent,
    AddGiftComponent,
    EditGiftComponent,
    HomeVisitServiceComponent,
    AddHomeVisitComponent,
    EditHomeVisitComponent,
    ViewHomeVisitComponent,
    AddNotificationComponent,
    ViewNotificationComponent,
    OtpComponent,
    AboutUsComponent,
    EditAboutUsComponent,
    ViewPrivacyPolicyComponent,
    EditPrivacyPolicyComponent,
    ViewTermsComponent,
    EditTermsComponent,
    LinkManagementComponent,
    ProductCategoryComponent,
    ViewProductCategoryComponent,
    EditproductCategoryComponent,
    AddproductCategoryComponent,
    BannerManagementComponent,
    VendorManagementComponent,
    ViewVendorComponent,
    EditVendorComponent,
    AddVendorComponent,
    SocialMediaManagementComponent,
    AddBannerComponent,
    EditBannerComponent,
    ViewBannerComponent,
    AddSubServiceComponent,
    HomeContentComponent,
    AddSectionComponent,
    ViewSectionComponent,
    EditSectionComponent,
    HomeSectionComponent,
    HomeBannerComponent,
    HomeBannerAddComponent,
    HomeBannerEditComponent,
    HomeBannerViewComponent,
    LoginScreenContentComponent,
    AddLoginContentComponent,
    EditLoginContentComponent,
    ViewLoginContentComponent,
    BookPractionerListComponent,
    BookPractionerAddComponent,
    BookPractionerEditComponent,
    BookPractionerViewComponent,
    ExploreServiceComponent,
    ExploreServiceAddComponent,
    ExploreServiceEditComponent,
    ExploreServiceViewComponent,
    ExploreProductComponent,
    ExploreProductAddComponent,
    ExploreProductEditComponent,
    ExploreProductViewComponent,
    RefferalManagementComponent,
    RefferalViewComponent,
    ViewGiftComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    AngularFontAwesomeModule,
    CKEditorModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut: 2000
    }),
    NgxSpinnerModule,
    NgxPaginationModule,
    TooltipModule.forRoot(MyDefaultTooltipOptions as TooltipOptions),
    NgMultiSelectDropDownModule.forRoot()

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
