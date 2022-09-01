import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import users from '../../../api/db/users.json'
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-publish-area',
  templateUrl: './publish-area.component.html',
  styleUrls: ['./publish-area.component.scss']
})
export class PublishAreaComponent implements OnInit {

  @Input() logged_user_id: any;
  @Output() reloadPostsEvent = new EventEmitter<boolean>();

  user: any;
  placeholder = '';
  users = users;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void { }

  ngOnChanges() {
    this.user = this.logged_user_id
    this.placeholder = `Hey ${this.user.name}! Post something in your profile`
  }

  publish(content: HTMLInputElement) {
    const user = {
      _id: this.user._id,
      name: this.user.name,
      username: this.user.username,
      followers: this.user.followers,
      following: this.user.following,
      total_posts_count: this.user.total_posts_count,
      profile_picture: this.user.profile_picture,
      created_at: this.user.creted_at
    }

    const bag= {
      _id: Math.floor(Math.random() * 1000),
      user: user,
      following: this.user.following,
      content: {
        type: 'normal',
        text: content.value,
        created_at: Date.now()
      }
    }

    this.postService.publishPost(bag)
    debugger;
    this.reloadPostsEvent.emit(true)
  }
}
