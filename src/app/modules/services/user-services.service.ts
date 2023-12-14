import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<any> {
    // Make an API call to fetch user details based on the userId
    // Replace 'API_ENDPOINT' with your actual API URL
    return this.http.get(`API_ENDPOINT/users/${userId}`);
  }
}
