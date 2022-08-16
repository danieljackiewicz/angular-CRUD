import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  results?: any;
  country?: [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe({
      next: (data) => {
        this.results = data.results;
        console.log(data.results);

        for (let i = 0; i < this.results.length; i++) {
          console.log(this.results[i]);
          console.log(this.results[i].parentLocation.name);
        }
      },

      // error: (err) => {
      //   console.log(err);
      //   if (err.error) {
      //     this.content = JSON.parse(err.error).message;
      //   } else {
      //     this.content = 'Error status' + err.status;
      //   }
      // },
    });
  }
  refresh(): void {
    this.userService.getData();
  }
}
