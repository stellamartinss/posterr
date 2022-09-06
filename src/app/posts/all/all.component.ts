import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  posts: any;

  constructor(private postsService: PostService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res
    });
  }

}
