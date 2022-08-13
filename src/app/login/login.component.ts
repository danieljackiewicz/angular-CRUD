import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoggedIn = true;
      },
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
