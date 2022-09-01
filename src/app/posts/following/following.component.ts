import { Component, OnInit } from '@angular/core';
import posts from '../../../../api/db/posts.json'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  posts = posts

  constructor() {
    const postList = posts;
    this.posts = postList.filter(post => post.is_following === true)
  }

  ngOnInit(): void {
  }

}
