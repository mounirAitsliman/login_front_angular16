import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = sessionStorage.getItem('auth-user');

    let Headers = {};

    if (user) {

      Headers = {

        headers: new HttpHeaders({

          'Content-Type': 'application/json',

          'Authorization': 'Bearer ' + JSON.parse(user).token
        }),

        responseType: "text"

      };

    }

    
    req = req.clone( Headers
      
  );

    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];