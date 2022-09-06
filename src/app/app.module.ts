import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";

import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {PostsModule} from "./posts/posts.module";
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { PublishAreaComponent } from './publish-area/publish-area.component';
import {UserService} from "./services/user.service";
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./services/http-service";
import {CommonService} from './services/common-service';
import {DataService} from "./services/data.service";



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MenuComponent,
    ModalComponent,
    PublishAreaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PostsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [UserService,
    PostService,
    HttpService,
    DataService,
    CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
