import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css'],
})
export class DestinationDetailsComponent implements OnInit {
  location: any = {
    name: '',
    code: '',
    locationKind: '',
    parentLocation: '',
  };
  public id: any;
  isLoggedIn(): boolean {
    return this.storageService.isLoggedIn();
  }
  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
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
  editDestination(): void {
    this.router.navigate([`/home/destination/${this.id}/edit`]);
  }
}
