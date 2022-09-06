import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  selectedToggle = 'all';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  setSelectedToggle(toggle: string) {
    this.selectedToggle = toggle
    if(toggle === 'following') {
      this.router.navigateByUrl('/following');
      this.selectedToggle = 'following';
    } else {
      this.router.navigateByUrl('/all');
      this.selectedToggle = 'all';
    }
  }
}
