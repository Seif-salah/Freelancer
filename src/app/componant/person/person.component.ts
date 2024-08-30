import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { FreelancerService } from '../../servieces/freelancer.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  // constructor(
  //   private productServ: ProductService,
  //   private route: ActivatedRoute
  // ) {}
  constructor(private route: ActivatedRoute ,private serv:FreelancerService) {}
  id!: number;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    return this.serv.getFreelancerById(this.id).subscribe((res)=>{
      console.log(this.id)
      console.log(res)
    })
  }
}
