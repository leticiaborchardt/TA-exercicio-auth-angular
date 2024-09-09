import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/login`, login);
  }

  logout(): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/logout`, null);
  }

  isLoggedIn(): boolean {
    return this.getAuthToken() != null;
  }

  getUserRole(): string {
    return jwtDecode(this.getAuthToken() ?? '').sub ?? '';
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  removeAuthToken() {
    localStorage.removeItem('authToken');
  }
}
