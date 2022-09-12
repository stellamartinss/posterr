import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http-service';
import {UserService} from './user.service';
import {DataService} from "./data.service";

@Injectable()
export class PostService {

  constructor(private httpService: HttpService,
              private dataService: DataService,
              private userService: UserService) {
  }

  getUserPosts(id: number): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const userPosts = this.httpService.httpGet(`/api/posts?user.id=${id}&_sort=content.created_at&_order=desc`, token);

    return userPosts;
  }

  getPosts(): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const posts = this.httpService.httpGet('/api/posts?_sort=content.created_at&_order=desc', token);

    return posts;
  }

  getPostById(id: number): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const posts = this.httpService.httpGet('/api/posts/' + id, token);

    return posts;
  }

  getUserFollowingPosts(): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const userPosts = this.httpService.httpGet(`/api/posts?is_following=true&_sort=content.created_at&_order=desc`, token);

    return userPosts;
  }

  publishPost(post: any) {
    let token = localStorage.getItem('r-token') || ''
    return this.httpService.httpPost('/api/posts', post, token).subscribe(res => {
      console.log('res', res)
    });
  }

  toRespost(id: number) {
    let token = localStorage.getItem('r-token') || ''
    let post_bag = {};

    /** in a perfect scenario this should be done in the backend, once the scope of this project doesn't include the
     * backend, I dicided do like this. */

    this.getPostById(id).subscribe(post => {
      this.userService.getLoggedUser().subscribe((loggedUser: any) => {
        const user = loggedUser[0];
        this.getUserPosts(user.id).subscribe(userPosts => {
          debugger;
          post_bag = {
            id: Math.floor(Math.random() * 10000),
            user: {
              id: user.id,
              name: user.name,
              username: user.username,
              followers: user.followers,
              following: user.following,
              total_posts_count: userPosts.length,
              profile_picture: user.profile_picture,
              created_at: user.created_at
            },
            is_following: true,
            content: {
              type: 'repost',
              text: 'repost feature will be developed in the next version',
              created_at: new Date(),
              subContent: {
                user: {
                  id: post.user.id,
                  name: post.user.name,
                  profile_picture: post.user.profile_picture
                },
                created_at: post.content.created_at,
                content: {
                  text: post.content.type === 'normal' ? post.content.text : post.content.subContent.content.text
                }
              }
            }
          };

          this.httpService.httpPost('/api/posts', post_bag, token).subscribe(res => {
            console.log('res', res)
          })
          this.dataService.setReloadPosts(true);
        })
      })
    })


  }

  toQuote(id: number) {
    let token = localStorage.getItem('r-token') || ''
    let post_bag = {};

    /** in a perfect scenario this should be done in the backend, once the scope of this project doesn't include the
     * backend, I dicided do like this. */

    this.getPostById(id).subscribe(post => {
      this.userService.getLoggedUser().subscribe((loggedUser: any) => {
        const user = loggedUser[0];
        this.getUserPosts(user.id).subscribe(userPosts => {
          post_bag = {
            id: Math.floor(Math.random() * 10000),
            user: {
              id: user.id,
              name: user.name,
              username: user.username,
              followers: user.followers,
              following: user.following,
              total_posts_count: userPosts.length,
              profile_picture: user.profile_picture,
              created_at: user.created_at
            },
            is_following: true,
            content: {
              type: 'quote',
              created_at: new Date(),
              subContent: {
                user: {
                  id: post.user.id,
                  name: post.user.name,
                  profile_picture: post.user.profile_picture
                },
                created_at: post.content.created_at,
                content: {
                  text: post.content.type === 'normal' ? post.content.text : post.content.subContent.content.text
                }
              }
            }
          };

          this.httpService.httpPost('/api/posts', post_bag, token).subscribe(res => {
            console.log('res', res)
          })
          this.dataService.setReloadPosts(true);
        })
      })
    })


  }
}
