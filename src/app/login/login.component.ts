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
    email: '',
    password: '',
  };
  errorMessage = '';
  show = true;
  isLoggedIn = this.storageService.isLoggedIn();
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isLoggedIn === true) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.detail;
        alert(this.errorMessage);
      },
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
