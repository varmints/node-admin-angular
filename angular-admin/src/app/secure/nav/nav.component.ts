import { Component, Input, OnInit } from '@angular/core';
import { Auth } from 'classes/auth';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    Auth.userEmitter.subscribe((user) => (this.user = user));
  }

  logout(): void {
    this.authService.logout().subscribe(() => console.log('success logout'));
  }
}
