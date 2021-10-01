import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home-page/home/home.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { JobAdvertisementEmployerControlComponent } from './features/job-advertisement/job-advertisement-employer-control/job-advertisement-employer-control.component';
import { JobAdvertisementFavouriteListComponent } from './features/job-advertisement/job-advertisement-favourite-list/job-advertisement-favourite-list.component';
import { JobAdvertisementListByCompanyComponent } from './features/job-advertisement/job-advertisement-list-by-company/job-advertisement-list-by-company.component';
import { JobAdvertisementVerificationComponent } from './features/job-advertisement/job-advertisement-verification/job-advertisement-verification.component';
import { CandidateProfileComponent } from './features/profile/candidate-profile/candidate-profile.component';
import { EmployerProfileComponent } from './features/profile/employer-profile/employer-profile.component';
import { SystemEmployeeProfileComponent } from './features/profile/system-employee-profile/system-employee-profile.component';
import { CvBaseComponent } from './features/user/candidate/candidate-cv/cv-base/cv-base.component';
import { CvInformationComponent } from './features/user/candidate/candidate-cv/cv-information/cv-information.component';
import { JobExperienceListComponent } from './features/user/candidate/candidate-job-experience/job-experience-list/job-experience-list.component';
import { CandidateLoginComponent } from './features/user/candidate/candidate-login/candidate-login.component';
import { CandidateSigninComponent } from './features/user/candidate/candidate-signin/candidate-signin.component';
import { EmployerAddPositionComponent } from './features/user/employer/employer-add-position/employer-add-position.component';
import { EmployerListPositionComponent } from './features/user/employer/employer-list-position/employer-list-position.component';
import { EmployerLoginComponent } from './features/user/employer/employer-login/employer-login.component';
import { EmployerSigninComponent } from './features/user/employer/employer-signin/employer-signin.component';
import { SystemEmployeeLoginComponent } from './features/user/system-employee/system-employee-login/system-employee-login.component';
import { SystemEmployeeUpdateControlComponent } from './features/user/system-employee/system-employee-update-control/system-employee-update-control.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "candidateSignIn", component: CandidateSigninComponent },
  { path: "candidateLogin", component: CandidateLoginComponent },
  { path : "employerSignIn", component: EmployerSigninComponent },
  { path : "employerLogin", component: EmployerLoginComponent },
  { path: "jobAdListByCompany/:id", component: JobAdvertisementListByCompanyComponent },
  { path: "candidateProfile/:id", component: CandidateProfileComponent},
  { path: "candidateCv/:id", component: CvBaseComponent},
  { path: "favouriteAds/:id", component: JobAdvertisementFavouriteListComponent },
  { path: "jobAdsByCompany/:id", component: JobAdvertisementListByCompanyComponent },
  { path: "employerProfile/:id", component : EmployerProfileComponent },
  { path: "employerAdControl/:id", component: JobAdvertisementEmployerControlComponent },
  { path: "newJobAdvertisement", component: JobAdvertisementAddComponent },
  { path: "systemLogin", component: SystemEmployeeLoginComponent },
  { path: "systemProfile/:id", component: SystemEmployeeProfileComponent },
  { path: "advertisementControl", component: JobAdvertisementVerificationComponent },
  { path: "updateControl", component: SystemEmployeeUpdateControlComponent },
  { path: "newJobPosition", component: EmployerListPositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
