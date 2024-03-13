import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../.config.ts/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = null;

  constructor(private http: HttpClient) {}

  verifyToken(token: string) {
    return this.http.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  saveToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
