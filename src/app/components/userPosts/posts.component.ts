import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/functional.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userPosts: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('id');
    const userId = userIdParam ? +userIdParam : null;

    if (userId !== null) {
      this.dataService.getPosts().subscribe(posts => {
        this.userPosts = posts.filter(post => post.userId === userId);
      }, error => {
        console.error('Error fetching posts:', error);
      });
    } else {
      console.error('No user ID provided in the route.');
    }
  }
}
