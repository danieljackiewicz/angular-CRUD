import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css'],
})
export class DestinationDetailsComponent implements OnInit {
  location: any;
  id: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getLocation(111).subscribe({
      next: (data) => {
        this.location = data;
        console.log('location', this.location);
      },
    });
  }
}
