import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  getUserPosts(id: number) {
    const userPosts = this.http.get(`/posts?user._id=${id}`).subscribe(res => {
      console.log('res', res)
    });

    return userPosts;
  }

  publishPost(post: any) {
    this.http.post('/posts', post).subscribe(res => {
      console.log('res', res)
    });
  }

}
