import { Component, OnInit } from '@angular/core';
import posts from '../../../../api/db/posts.json'
import {PostService} from "../../services/post.service";
import {Observable, Subscription} from "rxjs";
import {CommonService} from "../../services/common-service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  posts: any
  routeQueryParams$: Subscription | undefined;

  constructor(private postsService: PostService,
              private commonService: CommonService,
              private router: Router, public dialog: MatDialog,
              private route: ActivatedRoute) {
    this.getProfile();
  }

  ngOnInit(): void {
    this.getFollowingPosts()
  }

  getFollowingPosts(){
    this.postsService.getUserFollowingPosts().subscribe(res => {
      this.posts = res
    })
  }

  ngOnDestroy() {
    this.routeQueryParams$?.unsubscribe();
  }

  private getProfile() {
    this.routeQueryParams$ = this.route.queryParams.subscribe(params => {
      debugger
      if (params['user_id']) {
        this.commonService.openUserModal(+params['user_id']);
      }
    });
  }
}
