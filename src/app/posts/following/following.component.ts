import { Component, OnInit } from '@angular/core';
import posts from '../../../../api/db/posts.json'
import {PostService} from "../../services/post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  posts: any

  constructor(private postsService: PostService) {

  }

  ngOnInit(): void {
    this.getFollowingPosts()
  }

  getFollowingPosts(){
    this.postsService.getUserFollowingPosts().subscribe(res => {
      this.posts = res
    })
  }

}
