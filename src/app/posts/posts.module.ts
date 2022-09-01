import {NgModule} from '@angular/core';
import {FollowingComponent} from './following/following.component';
import {AllComponent} from './all/all.component';
import {PostsRoutingModule} from "./posts.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";
import {PostListTemplateComponent} from "./post-list-template/post-list-template.component";


@NgModule({
  imports: [
    PostsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    CommonModule
  ],
  declarations: [
    FollowingComponent,
    AllComponent,
    PostListTemplateComponent
  ],
  exports: [
    PostListTemplateComponent
  ]
})
export class PostsModule {
}
