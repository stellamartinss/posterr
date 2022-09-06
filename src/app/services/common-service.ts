import {DataService} from "./data.service";
import {PostService} from "./post.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CommonService {
  constructor(private postService: PostService, private dataService: DataService) {
  }

  getAll() {
    this.postService.getPosts().subscribe(res => {
      return res
    });
  }

  checkNewPublishTrigger() {
    this.dataService.reloadPosts.subscribe((res) => {
      if(res) {
        return this.getAll();
      }
    })
  }
}
