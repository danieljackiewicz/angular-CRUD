import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    codeMerlinx: '',
    locationKind: 'CR',
    parentLocation: null,
  };
  loggedIn: TemplateRef<any> | null = null;
  isLoggedIn = false;
  status: string | undefined;
  public id: any;
  display = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    const { name, code, parentLocation, locationKind, codeMerlinx } = this.form;

    if (this.isLoggedIn) {
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService
      .updateLocation(
        this.id,
        name,
        code,
        codeMerlinx,
        locationKind,
        parentLocation
      )
      .subscribe({
        next: (data) => {
          this.status = 'Zmiany zostały zapisane';
          alert(this.status);
          this.router.navigate(['/home']);
        },
      });
  }
  onEdit(): void {
    // this.display = true;
    this.display = !this.display;
  }
}
