import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllComponent} from "./posts/all/all.component";
import {FollowingComponent} from "./posts/following/following.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: 'posts', pathMatch: 'full', component: PostsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
