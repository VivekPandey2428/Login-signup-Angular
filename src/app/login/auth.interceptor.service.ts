import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        let modifiedrequest=req.clone({
            headers: req.headers.append('auth','abc'),
        })
        console.log('sending interceptor');
        return next.handle(modifiedrequest);
    }
}