import {DataService} from "./data.service";
import {PostService} from "./post.service";
import {Injectable} from "@angular/core";
import {ModalComponent} from "../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class CommonService {
  constructor(private postService: PostService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  getAll() {
    this.postService.getPosts().subscribe(res => {
      return res
    });
  }

  checkNewPublishTrigger() {
    debugger;
    this.dataService.reloadPosts.subscribe((res) => {
      if(res) {
        return this.getAll();
      }
    })
  }


  openUserModal(user_id: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '1000px',
      height: '90vh',
      data: {user_id: user_id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
