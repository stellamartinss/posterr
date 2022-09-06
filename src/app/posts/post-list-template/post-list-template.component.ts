import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-list-template',
  templateUrl: './post-list-template.component.html',
  styleUrls: ['./post-list-template.component.scss']
})
export class PostListTemplateComponent implements OnInit {
  @Input() posts: any;

  constructor(public dialog: MatDialog, private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {}

  goToProfile(user_id: number) {
    this.router.navigate(['/all'], {queryParams: {user_id: user_id}});
  }

  unfollow() {}
}
