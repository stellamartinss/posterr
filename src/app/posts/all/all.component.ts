import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {DataService} from "../../services/data.service";
import {CommonService} from "../../services/common-service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  posts: any;

  constructor(private postsService: PostService, private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.posts = this.commonService.checkNewPublishTrigger();
    this.getAll();
  }

  getAll() {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res
    });
  }


}
