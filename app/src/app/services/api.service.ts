import { Injectable, ChangeDetectorRef, Inject } from '@angular/core';
import { HttpClientModule ,HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
user:User;
  constructor(private http: HttpClient) { }

  
  get(query, data?: any) {

    let body = Object.assign({}, data);

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    myHeaders = myHeaders.append('Authorization', 'bearer ' + localStorage.getItem("token"));

    var myParams = new HttpParams();
    Object.keys(body).map(function (item, index) {
      myParams = myParams.append(item, body[item]);
    });

    return this.http.get(environment.apiUrl + '/' + query, {
      params: myParams,
      headers: myHeaders
    })
      .map(this.extractData)
      .catch(this.catchError)

  }
  public get currentUserValue(): User {
    return this.currentUserValue;
}
  login(query, data?: any, queryparams: object = {}) {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
   
    debugger
    let body = Object.assign({}, data);
    var myParams = new HttpParams();

    Object.keys(queryparams).map(function (item, index) {
      myParams.set(item, queryparams[item]);
    });

    return this.http
      .post(environment.apiUrl + '/' + query, body, {
        params: myParams,
        headers: myHeaders,
      })
      .map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
       debugger
        localStorage.setItem('token', user["token"]);
        return user;
    })
      .catch(this.catchError);
debugger
  }


  post(query, data?: any, queryparams: object = {}) {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    myHeaders = myHeaders.append('Authorization', 'bearer ' + localStorage.getItem("token"));

    let body = Object.assign({}, data);
    var myParams = new HttpParams();

    Object.keys(queryparams).map(function (item, index) {
      myParams.set(item, queryparams[item]);
    });

    return this.http
      .post(environment.apiUrl + '/' + query, body, {
        params: myParams,
        headers: myHeaders,
      })
      .map(this.extractData)
      .catch(this.catchError);

  }



  put(query, data?: any, queryparams: object = {}) {

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    myHeaders = myHeaders.append('Authorization', 'bearer ' + localStorage.getItem("token"));

    let body = Object.assign({}, data);
    var myParams = new HttpParams();

    Object.keys(queryparams).map(function (item, index) {
      myParams.set(item, queryparams[item]);
    });

    return this.http
      .put(environment.apiUrl + '/' + query, body, {
        params: myParams,
        headers: myHeaders,
      })
      .map(this.extractData)
      .catch(this.catchError);

  }


  delete(query, data?: any, queryparams: object = {}) {

    debugger
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    myHeaders = myHeaders.append('Authorization', 'bearer ' + localStorage.getItem("token"));

    
    var myParams = new HttpParams();

    Object.keys(queryparams).map(function (item, index) {
      myParams.set(item, queryparams[item]);
    });

    return this.http
      .delete(environment.apiUrl + '/' + query, 
      {
        params: myParams,
        headers: myHeaders,
      }
    );
  }

  private catchError(error: Response | any) { return Observable.throw({ message: error }); }
  private extractData(res: any) { return JSON.parse(JSON.stringify(res)); }


}
