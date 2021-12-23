import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (user) => (this.user = user),
      error: () => this.router.navigate(['/login']),
    });
  }
}
