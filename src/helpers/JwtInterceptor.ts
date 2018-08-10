import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from "../environment/environments";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  api_key:string=environment.API_KEY;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.api_key}`
        }
      });
    return next.handle(request);
  }
}
