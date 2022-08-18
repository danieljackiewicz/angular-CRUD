import { UserService } from './../_services/user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationList } from '../destination-list/destination-list.component';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css'],
})
export class AddDestinationComponent implements OnInit {
  form: any = {
    name: '',
    code: '',
    codeMerlinx: '',
    locationKind: 'CR',
    parentLocation: null,
  };
  isLoggedIn = false;
  loggedIn: TemplateRef<any> | null = null;
  public id: any;
  public idArr: any = [];

  constructor(
    public userService: UserService,
    private router: Router,
    public destinationList: DestinationList
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    const { name, code, parentLocation, locationKind, codeMerlinx } = this.form;

    if (this.isLoggedIn) {
    }
    this.userService
      .createLocation(name, code, codeMerlinx, locationKind, parentLocation)
      .subscribe({
        next: (data) => {
          this.id = data.id;
          this.destinationList.myIdArr.push(this.id);
          this.router.navigate(['/home/destination/', this.id]);
        },

        // error: (err) => {
        //   this.errorMessage = err.error.message;
        //   this.isLoggedIn = true;
        // },
      });
  }
}
