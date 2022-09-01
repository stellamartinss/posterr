import { Component, OnInit, OnChanges } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: any

  constructor(public dialog: MatDialog, private userService: UserService) {

    this.user = this.userService.getLoggedUser();

    this.openUserModal()}

  ngOnInit(): void {
  }

  openUserModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1000px',
      height: '90vh',
      data: {user_id: this.user._id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
