import { Component, OnInit } from '@angular/core';
import posts from '../../../../api/db/posts.json'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  posts = posts

  constructor() {}

  ngOnInit(): void {
  }

}
