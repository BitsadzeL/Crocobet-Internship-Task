import { Component } from '@angular/core';
import { DataService } from 'src/app/services/functional.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  posts: any[] = [];
  selectedPost: any = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllPosts();

  }

  getAllPosts(){
    this.dataService.getPosts().subscribe(posts => {
      this.posts=posts

    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  selectPost(post: any) {
    this.selectedPost = post;
  }

  clearSelection() {
    this.selectedPost = null;
  }


}




