import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.sass',
})
export class HomepageComponent implements OnInit {
  token: string | null = null;
  usersList: any[] = [];
  subscription!: Subscription;

  constructor(private auth: AuthService, private users: UsersService) {}
  ngOnInit(): void {
    this.token = this.auth.getToken();
    this.subscription = this.users.getUsers(this.token!).subscribe({
      next: (usersList) => {
        this.usersList = usersList;
        console.log(usersList);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
