import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../.config.ts/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(token: string): Observable<any> {
    return this.http.get(`${API_URL}/users`, {
      headers: { Authorization: `bearer: ${token}` },
    });
  }
}
