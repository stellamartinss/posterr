import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts.component";
import {AllComponent} from "./all/all.component";
import {FollowingComponent} from "./following/following.component";

const routes: Routes = [
  {path: 'all', pathMatch: 'full', component: AllComponent},
  {path: 'following', pathMatch: 'full', component: FollowingComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
