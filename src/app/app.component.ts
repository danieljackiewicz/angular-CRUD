import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './_services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRUD';
  isLoggedIn = this.storageService.isLoggedIn();

  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit(): void {
    if (this.isLoggedIn === true) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
