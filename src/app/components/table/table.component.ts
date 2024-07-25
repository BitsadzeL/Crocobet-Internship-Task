import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/functional.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any[] = [];
  userPostsMap = new Map<number, any[]>();
  filteredUsers: any[] = [];
  searchQuery: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.fetchUserPosts(users);
    }, error => {
      console.error('Error fetching users:', error);
    });

  }

  fetchUserPosts(users: any[]) {
    this.dataService.getPosts().subscribe(posts => {
      users.forEach(user => {
        this.userPostsMap.set(user.id, posts.filter(post => post.userId === user.id));
      });
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  filterUsers(): void {
    if (!this.searchQuery) {
      this.filteredUsers = this.users;
    }

    const searchTextLower = this.searchQuery.toLowerCase().trim();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchTextLower) ||
      user.username.toLowerCase().includes(searchTextLower) ||
      user.email.toLowerCase().includes(searchTextLower)
    );
  }
}
