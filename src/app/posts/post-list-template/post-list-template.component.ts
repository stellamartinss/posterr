import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common-service";
import {UserService} from "../../services/user.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-post-list-template',
  templateUrl: './post-list-template.component.html',
  styleUrls: ['./post-list-template.component.scss']
})
export class PostListTemplateComponent implements OnInit {
  @Input() posts: any;
  logged_in: any;

  constructor(public dialog: MatDialog,
              private router: Router,
              private dataService: DataService,
              private userService: UserService,
              private postService: PostService,
              private commonService: CommonService) {
  }

  ngOnInit() {
    this.userService.getLoggedUser().subscribe(user => {
      this.logged_in = user[0];
    });
  }

  goToProfile(user_id: number) {
    const page = this.commonService.getPage()
    this.router.navigate([page], {queryParams: {user_id: user_id}});
  }

  unfollow(post: { post_id: number; user_id: number }) {
    this.postService.getUserPosts(post.user_id).subscribe((posts: Array<any>) => {
      let count = 0;
      posts.forEach(p => {
        p.is_following = null;
        this.userService.unfollow(p).subscribe(res => {
          if (res) {
            count = count + 1;
          }

          if (count === posts.length) {
            this.dataService.setReloadPosts(true);

            const element = document.getElementById(`post-number-${post.post_id}-${post.user_id}`)
            element?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }
        });
      })
    });

  }

  follow(post: { post_id: number; user_id: number }) {
    debugger;
    this.postService.getUserPosts(post.user_id).subscribe((posts: Array<any>) => {
      let count = 0;
      posts.forEach(p => {
        p.is_following = true;
        this.userService.follow(p).subscribe(res => {
          if (res) {
            count = count + 1;
          }
          if (count === posts.length) {
            debugger;
            this.dataService.setReloadPosts(true);

            const element = document.getElementById(`post-number-${post.post_id}-${post.user_id}`)
            element?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
          }
        });
      })


    });
  }

  toRepost(id: number) {
    this.postService.toRespost(id);
  }

  toQuote(id: number) {
    this.postService.toQuote(id);
  }
}
