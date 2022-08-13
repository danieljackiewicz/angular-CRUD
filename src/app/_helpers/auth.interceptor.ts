import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      // withCredentials: "true",
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
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
