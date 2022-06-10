import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from './../../environments/environment.prod';
import { User } from './../domains/user';

@Injectable()
export class LoginService {

    path = environment.apiUrl + '/users'

    constructor(private http: HttpClient) {
    }

    login(user: User) {
        return this.http.post(`${this.path}/login`, user, {
            responseType: 'text'
        });
    }

    signup(user: User) {
        return this.http.post(`${this.path}`, user);
    }
}