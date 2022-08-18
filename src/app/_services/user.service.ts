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
  getLocation(id: number): Observable<any> {
    return this.http.get(AUTH_API + `location/${id}`, { responseType: 'json' });
  }
  createLocation(
    name: string,
    code: string,
    codeMerlinx: string,
    locationKind: 'CR',
    parentLocation: number
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'location/',
      { name, code, codeMerlinx, locationKind, parentLocation },
      {
        responseType: 'json',
      }
    );
  }
  updateLocation(
    id: number,
    name: string,
    code: string,
    codeMerlinx: string,
    locationKind: 'CR',
    parentLocation: number
  ): Observable<any> {
    return this.http.put(
      AUTH_API + `location/${id}`,
      { name, code, codeMerlinx, locationKind, parentLocation },
      {
        responseType: 'json',
      }
    );
  }
  deleteLocation(id: number): Observable<any> {
    return this.http.delete(AUTH_API + `location/${id}`, {
      responseType: 'json',
    });
  }
  getMyData(id: Array<number>): Observable<any> {
    return this.http.get(AUTH_API + `location/${id}`, { responseType: 'json' });
  }
}
