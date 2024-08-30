import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FreelanceresResponce } from '../model/freelancer-response';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient,) { }

  getAllFreelanceres(): Observable<any> {
    return this.http.get<any>(`http://localhost:4123/api/v1/users`);
  }

  getFreelancerById(movieId: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:4200/freelncer/:id`
    );
  }

}
