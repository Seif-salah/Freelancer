import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './componant/nav/nav.component';
import { LandingComponent } from './componant/landing/landing.component';
import { LoginComponent } from './componant/login/login.component';
import { SignupComponent } from './componant/signup/signup.component';
import { PersonComponent } from './componant/person/person.component';
import { JobsComponent } from './componant/jobs/jobs.component';
import { FreelanceresComponent } from './componant/freelanceres/freelanceres.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,LandingComponent,LoginComponent,SignupComponent,PersonComponent,JobsComponent,FreelanceresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'freelance';
}
