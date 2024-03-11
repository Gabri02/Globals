import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-logpage',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  templateUrl: './logpage.component.html',
  styleUrl: './logpage.component.sass',
})
export class LogpageComponent {
  apikey = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.apikey.hasError('required')) {
      return 'You must enter a value';
    }

    return this.apikey.hasError('apikey') ? 'Not a valid apikey' : '';
  }
}
