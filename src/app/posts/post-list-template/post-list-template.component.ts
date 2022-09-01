import {Component, Input, OnInit} from '@angular/core';
import posts from '../../../../api/db/posts.json'
import {ModalComponent} from "../../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-post-list-template',
  templateUrl: './post-list-template.component.html',
  styleUrls: ['./post-list-template.component.scss']
})
export class PostListTemplateComponent implements OnInit {
  @Input() posts = posts;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openUserModal(user_id: number) {
    debugger;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1000px',
      height: '90vh',
      data: {user_id: user_id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
