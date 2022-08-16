import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.css'],
})
export class PanelUserComponent implements OnInit {
  content?: string;
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log(err);
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = 'Error status' + err.status;
        }
      },
    });
  }
}
