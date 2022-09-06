import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../services/post.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  userPosts: any;
  user: any;
  logged_user: any;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { user_id: number },
              private postService: PostService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();

    this.getLoggedUser();
    this.getUserPosts();
  }

  reloadPosts($event: any) {
    if ($event === true) {
      this.userPosts = this.getUserPosts()
    }
  }

  private getUser() {
    debugger;
    this.userService.getUser(this.data.user_id).subscribe(res => {
      this.user = res[0]
    }, error => {
      this.user = {}
    });
  }

  private getLoggedUser() {
    this.userService.getLoggedUser().subscribe(res => {
      this.logged_user = res[0]
    }, error => {
      this.logged_user = {}
    });
  }

  private getUserPosts() {
    this.postService.getUserPosts(this.data.user_id).subscribe(res => {
      this.userPosts = res
    }, error => {
      this.userPosts = {}
    })
  }

}
