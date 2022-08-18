import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getLocation(this.id).subscribe({
      next: (data) => {
        this.location = data;
      },
    });
  }
}
