import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import users from '../../../api/db/users.json'
import {PostService} from "../services/post.service";
import {UserService} from "../services/user.service";

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
  users: any

  constructor(private postService: PostService, private userService: UserService) {
  }

  ngOnInit(): void { }

  ngOnChanges() {
    this.user = this.logged_user_id
    this.placeholder = `Hey ${this.user.name}! Post something in your profile`
  }

  getUsers(){
    this.userService.getUsers().subscribe(res => {
      this.users = res
    })
  }

  publish(content: HTMLInputElement) {
    const user = {
      id: this.user.id,
      name: this.user.name,
      username: this.user.username,
      followers: this.user.followers,
      following: this.user.following,
      total_posts_count: this.user.total_posts_count,
      profile_picture: this.user.profile_picture,
      created_at: this.user.creted_at
    }

    debugger;
    const bag= {
      id: Math.floor(Math.random() * 1000),
      user: user,
      following: this.user.following,
      content: {
        type: 'normal',
        text: content.value,
        created_at: Date.now()
      }
    }

    this.postService.publishPost(bag)
    this.reloadPostsEvent.emit(true)
  }
}
