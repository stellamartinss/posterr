import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";
import {PostService} from "../services/post.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  selectedToggle = 'all';
  logged_user: any;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getLoggedUser()
  }

  private getLoggedUser() {
    this.userService.getLoggedUser().subscribe(res => {
      this.logged_user = res[0]
    }, error => {
      this.logged_user = {}
    });
  }

  setSelectedToggle(toggle: string) {
    this.selectedToggle = toggle
    if (toggle === 'following') {
      this.router.navigateByUrl('/following');
      this.selectedToggle = 'following';
    } else {
      this.router.navigateByUrl('/all');
      this.selectedToggle = 'all';
    }
  }

  reloadPosts($event: any) {
    if ($event === true) {
      this.router.navigateByUrl('/all');
    }
  }
}
