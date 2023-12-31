import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/includes/header/header.component';
import { FooterComponent } from './Components/includes/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';



import { AuthGuard } from './Guards/auth.guard';
 import { Error404Component } from './Components/ErrorComponents/error404/error404.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { JobProfileComponent } from './Components/Profiles/job-profile/job-profile/job-profile.component';
import { ExploreCompaniesComponent } from './Components/Explore/explore-companies/explore-companies/explore-companies.component';
import { BookmarksComponent } from './Components/Dashboard/employee-dashboard/bookmarks/bookmarks.component';
import { ReviewsComponent } from './Components/Dashboard/employee-dashboard/reviews/reviews.component';
import { MessagesComponent } from './Components/Dashboard/messages/messages.component';
import { ManageJobsComponent } from './Components/Dashboard/company-dashboard/manage-jobs/manage-jobs.component';
import { ManageCandidatesComponent } from './Components/Dashboard/company-dashboard/manage-candidates/manage-candidates.component';
import { PostJobComponent } from './Components/Dashboard/company-dashboard/post-job/post-job.component';
import { SidebarComponent } from './Components/Dashboard/sidebar/sidebar.component';
import { SummaryComponent } from './Components/Dashboard/summary/summary.component';
import { CompanyDashboardComponent } from './Components/Dashboard/company-dashboard/company-dashboard.component';
import { JobComponent } from './Components/Dashboard/company-dashboard/job/job.component';
import { LettersListComponent } from './Components/Explore/explore-companies/letters-list/letters-list.component';
import { CompaniesListComponent } from './Components/Explore/explore-companies/companies-list/companies-list.component';
import { CompanyProfileComponent } from './Components/Profiles/company-profile/company-profile/company-profile.component';
import { CompanyTitlebarComponent } from './Components/Profiles/company-profile/company-titlebar/company-titlebar.component';
import { CompanyAboutComponent } from './Components/Profiles/company-profile/company-about/company-about.component';
import { CompanyOpenjobsComponent } from './Components/Profiles/company-profile/company-openjobs/company-openjobs.component';
import { CompanyReviewsComponent } from './Components/Profiles/company-profile/company-reviews/company-reviews.component';
import { CompanySidebarComponent } from './Components/Profiles/company-profile/company-sidebar/company-sidebar.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './Components/Dashboard/employee-dashboard/employee-dashboard.component';
import { ProfileSettingComponent } from './Components/Dashboard/profile-setting/profile-setting.component';
import { DashboardFooterComponent } from './Components/Dashboard/company-dashboard/dashboard-footer/dashboard-footer.component';
import { CandidateComponent } from './Components/Dashboard/company-dashboard/candidate/candidate.component';
import { JobTitlebarComponent } from './Components/Profiles/job-profile/job-titlebar/job-titlebar.component';
import { JobDescriptionComponent } from './Components/Profiles/job-profile/job-description/job-description.component';
import { JobSidebarComponent } from './Components/Profiles/job-profile/job-sidebar/job-sidebar.component';
import { ExploreJobsComponent } from './Components/Explore/explore-jobs/explore-jobs/explore-jobs.component';
import { MatchedJobsComponent } from './Components/Explore/explore-jobs/matched-jobs/matched-jobs.component';

import { JobCategoriesComponent } from './Components/Home/job-categories/job-categories.component';
import { JobsComponent } from './Components/Home/jobs/jobs.component';
import { CitiesComponent } from './Components/Home/cities/cities.component';
import { PaymentPlansComponent } from './Components/Home/payment-plans/payment-plans.component';
import { IndexComponent } from './Components/Home/index/index.component';
import { UserProfileComponent } from './Components/Profiles/user-profile/user-profile.component';
import { EmployeeSignupComponent } from './Components/Authentications/signup/employee-signup/employee-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanySignupComponent } from './Components/Authentications/signup/company-signup/company-signup.component';
import { LoginComponent } from './Components/Authentications/login/login.component';
import { ForgetPasswordComponent } from './Components/Authentications/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/Authentications/reset-password/reset-password.component';
    

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

     Error404Component,
    ContactUsComponent,
    JobProfileComponent,
    ExploreCompaniesComponent,
    BookmarksComponent,
    ReviewsComponent,
    MessagesComponent,
    ManageJobsComponent,
    ManageCandidatesComponent,
    PostJobComponent,
    SidebarComponent,
    SummaryComponent,
    JobCategoriesComponent,
    JobsComponent,
    CitiesComponent,
    PaymentPlansComponent,
    IndexComponent,


    CompanyDashboardComponent,
    JobComponent,
    DashboardComponent,
    EmployeeDashboardComponent,
    ProfileSettingComponent,
    DashboardFooterComponent,
    CandidateComponent,
    LettersListComponent,
    CompaniesListComponent,
    CompanyProfileComponent,
    CompanyTitlebarComponent,
    CompanyAboutComponent,
    CompanyOpenjobsComponent,
    CompanyReviewsComponent,
    CompanySidebarComponent,
    JobTitlebarComponent,
    JobDescriptionComponent,
    JobSidebarComponent,
    ExploreJobsComponent,
    MatchedJobsComponent,
    UserProfileComponent,
    EmployeeSignupComponent,
    CompanySignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
       
   ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,ToastrModule, ToastrModule.forRoot(),FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
