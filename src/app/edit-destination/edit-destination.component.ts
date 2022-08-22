import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-edit-destination',
  templateUrl: './edit-destination.component.html',
  styleUrls: ['./edit-destination.component.css'],
})
export class EditDestinationComponent implements OnInit {
  form: any = {
    name: '',
    code: '',
    locationKind: 'CR',
    parentLocation: null,
  };
  location: any = {
    name: '',
    code: '',
    locationKind: '',
    parentLocation: '',
  };
  public id: any;
  errorMessage: any;

  isLoggedIn(): boolean {
    return this.storageService.isLoggedIn();
  }
  status: string | undefined;
  display = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (this.isLoggedIn() == true) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.userService.getLocation(this.id).subscribe({
        next: (data) => {
          this.location = data;
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  onSubmit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService
      .updateLocation(this.id, this.form.name, this.form.code)
      .subscribe({
        next: (data) => {
          this.status = 'Zmiany zostały zapisane';
          alert(this.status);
          this.router.navigate(['/home/destination/', this.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
          alert(this.errorMessage);
        },
      });
  }
}
