import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { MainComponent } from './components/main/main.component';
import { PostsComponent } from './components/userPosts/posts.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { UsersComponent } from './components/users/users.component';
import { TodoComponent } from './components/todo/todo.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    TableComponent,
    MainComponent,
    PostsComponent,
    AllPostsComponent,
    UsersComponent,
    TodoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
