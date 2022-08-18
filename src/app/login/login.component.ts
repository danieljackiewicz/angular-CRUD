import { AuthService } from './../_services/auth.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: 'jackiewicz.daniel@gmail.com',
    password: 'Rekrutacja-2022',
  };
  isLoggedIn = false;
  errorMessage = '';
  loggedIn: TemplateRef<any> | null = null;
  show = true;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    } else {
      this.isLoggedIn = false;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    if (this.isLoggedIn) {
    }
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
