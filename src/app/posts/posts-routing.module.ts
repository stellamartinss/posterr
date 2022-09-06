import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AllComponent} from "./all/all.component";
import {FollowingComponent} from "./following/following.component";

const routes: Routes = [
  {path: '', component: AllComponent},
  {path: 'all', component: AllComponent},
  {path: 'following', component: FollowingComponent},
  {path: '**', component: AllComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
