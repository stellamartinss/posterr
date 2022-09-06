import { Component, OnInit, OnChanges } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: any

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {

     this.userService.getLoggedUser().subscribe(res => {
       this.user = res[0]
    });
  }

  ngOnInit(): void {
  }

  goToProfile() {
    this.router.navigate(['/'], {queryParams: {user_id: this.user.id}});
  }

}
