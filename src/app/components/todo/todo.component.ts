// todo.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/functional.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: any[] = [];
  userId: number | null = null;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    
    const userIdParam = this.route.snapshot.paramMap.get('id');
    this.userId = userIdParam ? +userIdParam : null;

    if (this.userId !== null) {
      
      this.dataService.getTodo().subscribe(todos => {
        this.todoList = todos.filter(todo => todo.userId === this.userId);
      }, error => {
        console.error('Error fetching todos:', error);
      });
    } else {
      console.error('No user ID provided in the route.');
    }
  }
}
