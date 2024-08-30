import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavComponent,RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  
}
