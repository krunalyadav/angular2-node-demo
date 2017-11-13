import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from '../posts.service';

@Component({selector: 'app-posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.css'], encapsulation: ViewEncapsulation.None})
export class PostsComponent implements OnInit {

  posts : any = [];

  constructor(private postsService : PostsService) {}

  ngOnInit() {
    // Retrieve posts from the API
    this
      .postsService
      .getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }
}
