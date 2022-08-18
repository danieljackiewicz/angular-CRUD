import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationList implements OnInit {
  results?: any;
  myDataArr: any = [];
  myIdArr: any = [399, 400, 401, 402];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe({
      next: (data) => {
        this.results = data.results;
        this.myData();
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
  myData(): void {
    for (let i = 0; i < this.myIdArr.length; i++) {
      this.userService.getLocation(this.myIdArr[i]).subscribe({
        next: (data) => {
          this.myDataArr.push(data);
        },
      });
    }
  }
  refresh(): void {
    this.userService.getData();
  }
}
