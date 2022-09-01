import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  selectedToggle = 'all';

  constructor(private router: Router) {
    this.setSelectedToggle('all')
  }

  ngOnInit(): void {
  }

  setSelectedToggle(toggle: string) {
    this.selectedToggle = toggle
    if(toggle === 'following') {
      this.router.navigate(['/following']);
      this.selectedToggle = 'following';
    } else {
      this.router.navigate(['/all']);
      this.selectedToggle = 'all';
    }
  }
}
