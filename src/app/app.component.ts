import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { StorageService } from './_services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRUD';
  isLoggedIn = false;
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
    }
  }
  // logout(): void {
  //   this.authService.logout().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.storageService.clean();
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  //   window.location.reload();
  // }
}
