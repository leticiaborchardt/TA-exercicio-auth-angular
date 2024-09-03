import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';

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

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  setCurrentUser(user: User): void {
    this.setUserRole(user.role);
  }

  getUserRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  setUserRole(role: string) {
    localStorage.setItem('userRole', role);
  }

  removeUserData() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  }
}
