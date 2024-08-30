import { Routes } from '@angular/router';
import { LandingComponent } from './componant/landing/landing.component';
import { LoginComponent } from './componant/login/login.component';
import { SignupComponent } from './componant/signup/signup.component';
import { FreelanceresComponent } from './componant/freelanceres/freelanceres.component';
import { JobsComponent } from './componant/jobs/jobs.component';
import { PersonComponent } from './componant/person/person.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'freelancers', component: FreelanceresComponent },
    { path: 'jops', component: JobsComponent },
    { path: 'freelancer/:id', component: PersonComponent },
    { path: '**', component: LandingComponent }

];
