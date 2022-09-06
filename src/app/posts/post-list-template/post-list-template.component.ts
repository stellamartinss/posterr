import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from "../../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../../services/common-service";

@Component({
  selector: 'app-post-list-template',
  templateUrl: './post-list-template.component.html',
  styleUrls: ['./post-list-template.component.scss']
})
export class PostListTemplateComponent implements OnInit {
  @Input() posts: any;

  constructor(public dialog: MatDialog,
              private router: Router,
              private commonService: CommonService) {}

  ngOnInit() {}

  goToProfile(user_id: number) {
    const page = this.commonService.getPage()
    console.log(page)
    this.router.navigate([page], {queryParams: {user_id: user_id}});
  }

  unfollow() {}
}
