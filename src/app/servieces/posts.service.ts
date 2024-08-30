import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getAllFreelanceres(): Observable<any> {
    return this.http.get<any>(
      `http://localhost:4000/getAlljops`
    );
  }

  getFreelancerById(movieId: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:4200/jops/:id`
    );
  }
}
