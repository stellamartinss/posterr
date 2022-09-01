import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  constructor(private http: HttpClient){}

  getUsers(){
    const userList = this.http.get('/users')
    debugger
    return userList
  }

  getUser(id: number) {
    const user = this.http.get(`/users?_id=${id}`).toPromise();
    debugger
    return user;
  }

  getLoggedUser() {
    const logged_id = 1
    const user = this.http.get(`/users?_id=${logged_id}`).toPromise();
    debugger;
    if (user) {
      return user;
    }

    return {
      _id: 0,
      name: '',
      username: '',
      followers: 0,
      following: 0,
      total_posts_count: 0,
      profile_picture: '',
      creted_at: ''
    }

  }
}
