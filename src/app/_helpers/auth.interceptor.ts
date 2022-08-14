import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
let user = window.localStorage.getItem('auth-user');
const token = user ? JSON.parse(user).access : '';

console.log('token', token);
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      // withCredentials: "true",
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
    console.log('token auth.interceptor', token);
    return next.handle(req);
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     const token = localStorage.getItem("token");

  //     if (token) {
  //         const cloned = req.clone({
  //             headers: req.headers.set("Authorization", "Bearer " + token)
  //         });

  //         return next.handle(cloned);
  //     } else {
  //         return next.handle(req);
  //     }
  // }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
