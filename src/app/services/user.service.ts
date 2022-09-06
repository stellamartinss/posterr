import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {HttpService} from "./http-service";
import {DataService} from "./data.service";

@Injectable()
export class UserService {

  constructor(private httpService: HttpService, private dataService: DataService) {
  }

  getUsers(): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const userList = this.httpService.httpGet('/api/users', token)

    return userList
  }

  getUser(id: number): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const user = this.httpService.httpGet(`/api/users?id=${id}`, token);
    return user;
  }

  getLoggedUser(): Observable<any> {
    let token = localStorage.getItem('r-token') || ''
    const logged_id = 1
    const user = this.httpService.httpGet(`/api/users?id=${logged_id}`, token);

    return user;
  }

  unfollow(post: any){
    let token = localStorage.getItem('r-token') || ''
    return this.httpService.httpPut(`/api/posts/${post['id']}`, post, token);
  }

  follow(post: any){
    let token = localStorage.getItem('r-token') || ''
    return this.httpService.httpPut(`/api/posts/${post['id']}`, post, token);
  }

}
