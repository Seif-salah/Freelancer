import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { FreelancerService } from '../../servieces/freelancer.service';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-freelanceres',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule,NgFor,NgClass],
  templateUrl: './freelanceres.component.html',
  styleUrl: './freelanceres.component.css'
})
export class FreelanceresComponent implements OnInit{
  users!:any;
  constructor(private freelancersServ:FreelancerService){};

  ngOnInit() {
      return this.freelancersServ.getAllFreelanceres()
        .subscribe((response) => {
          console.log(response);
          this.users=response.data;
        });
  }
}
