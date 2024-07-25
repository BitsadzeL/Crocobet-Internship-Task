import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/userPosts/posts.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { UsersComponent } from './components/users/users.component';
import { TodoComponent } from './components/todo/todo.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '*', redirectTo: '/main', pathMatch: 'full' },

  
  { path: 'allUsers', component: UsersComponent },
  { path: 'allPosts', component: AllPostsComponent },
  { path: 'main', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'table', component: TableComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'todo/:id', component: TodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
