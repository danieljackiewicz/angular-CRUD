import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_API } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(AUTH_API + 'location/', { responseType: 'json' });
  }
  getLocation(id: any): Observable<any> {
    return this.http.get(AUTH_API + `location/${id}`, { responseType: 'json' });
  }
  createLocation(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'location/', data, {
      responseType: 'json',
    });
  }
  updateLocation(id: number, data: any): Observable<any> {
    return this.http.put(AUTH_API + `location/${id}`, data, {
      responseType: 'json',
    });
  }
  deleteLocation(id: number): Observable<any> {
    return this.http.delete(AUTH_API + `location/${id}`, {
      responseType: 'json',
    });
  }
}
