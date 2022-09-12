import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class DataService {

  reloadPosts = new BehaviorSubject<any>(null)
  reloadPostId = new BehaviorSubject<any>(null)

  constructor() {
  }

  setReloadPosts(shouldRealod: boolean) {
    this.reloadPosts.next(shouldRealod)
  }

  setReloadPostId(reloadPostId: number) {
    debugger;
    this.reloadPostId.next(reloadPostId);
  }

}
