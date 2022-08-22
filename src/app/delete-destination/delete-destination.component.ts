import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-delete-destination',
  templateUrl: './delete-destination.component.html',
  styleUrls: ['./delete-destination.component.css'],
})
export class DeleteDestinationComponent implements OnInit {
  status: string | undefined;
  public id: any;
  idArr: any;
  arrT: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.deleteLocation(this.id).subscribe({
      next: (data) => {
        this.status = 'Usunięto';
        alert(this.status);
        this.deleteId();
        this.router.navigate(['/home']);
      },
    });
  }
  deleteId(): void {
    this.idArr = localStorage.getItem('id');
    this.arrT = JSON.parse(this.idArr);
    let indexId = this.arrT.indexOf(this.id);
    this.arrT.splice(indexId, 1);
    localStorage.setItem('id', JSON.stringify(this.arrT));
  }
}
