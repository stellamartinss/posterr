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

  constructor(public dialog: MatDialog,
              private router: Router,
              private dataService: DataService,
              private userService: UserService,
              private postService: PostService,
              private commonService: CommonService) {}

  ngOnInit() {}

  goToProfile(user_id: number) {
    const page = this.commonService.getPage()
    this.router.navigate([page], {queryParams: {user_id: user_id}});
  }

  unfollow(id: number) {
    this.postService.getUserPosts(id).subscribe((posts: Array<any>) => {
      let count = 0;
      posts.forEach(post => {
        post.is_following = null;
        this.userService.unfollow(post).subscribe(res => {
          if(res) {
            count = count + 1;
          }

          if(count === posts.length){
            this.dataService.setReloadPosts(true);
          }
        });
      })
    });

  }

  follow(id: number) {
    this.postService.getUserPosts(id).subscribe((posts: Array<any>) => {
      let count = 0;
      posts.forEach(post => {
        post.is_following = true;
        this.userService.follow(post).subscribe(res => {
          if(res) {
            debugger;
            count = count + 1;
          }
          if(count === posts.length){
            this.dataService.setReloadPosts(true);
          }
        });
      })


    });
  }
}
