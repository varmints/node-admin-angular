import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  page = 1;
  lastPage!: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.userService.all(this.page).subscribe((res: any) => {
      this.users = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

  prev(): void {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.load();
  }

  next(): void {
    if (this.page === this.lastPage) {
      return;
    }
    this.page++;
    this.load();
  }
}
