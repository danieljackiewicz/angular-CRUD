import { StorageService } from './../_services/storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationList implements OnInit {
  results?: any;
  myDataArr: any = []; //array z danymi do wyświetlenia
  localArray: any = localStorage.getItem('id');
  myIdArr: any = []; //array z id postów
  isLoggedIn = this.storageService.isLoggedIn();
  errorMessage: any;

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isLoggedIn === false) {
      this.router.navigate(['/login']);
    } else {
      if (this.localArray === null) {
        localStorage.setItem('id', JSON.stringify(this.myIdArr));
      } else {
        this.myIdArr = JSON.parse(this.localArray);
        this.userService.getData().subscribe({
          next: (data) => {
            this.results = data.results;
            this.myData();
          },
          error: (err) => {
            this.errorMessage = err.error;
            alert(this.errorMessage);
          },
        });
      }
    }
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
