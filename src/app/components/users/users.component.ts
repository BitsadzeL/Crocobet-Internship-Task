// users.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/functional.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  viewTodo(userId: number): void {
    this.router.navigate(['/todo', userId]);
  }
}
