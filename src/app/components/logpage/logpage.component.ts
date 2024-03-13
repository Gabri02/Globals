import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-logpage',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './logpage.component.html',
  styleUrl: './logpage.component.sass',
})
export class LogpageComponent {
  constructor(private auth: AuthService) {}

  apikey = new FormControl('', [Validators.required]);

  logForm = new FormGroup({
    apikey: this.apikey,
  });

  onSubmit() {
    const token = this.apikey.value;
    this.auth.verifyToken(token!).subscribe({
      next: () => {
        console.log('Authorized');
        this.auth.saveToken(token!);
        console.log(this.auth.getToken());
      },
      error: (e) => {
        console.error(e.error.message);
      },
    });
  }
}
