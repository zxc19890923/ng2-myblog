import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import {DropdownModule, TooltipModule, ModalModule} from 'ng2-bootstrap';

import {AppComponent} from './components/app.component';
import {NavbarComponent} from "./components/navbar.component";
import {BlogComponent} from "./components/blog.component";
import {NodeComponent} from "./components/node.component";
import {TechnologyComponent} from "./components/technology.component";
import {ArticalComponent} from "./components/artical.component";
import {ShareComponent} from "./components/share.componet";
import {ChartsComponent} from "./components/charts.component";
import {Ng2Echarts} from "ng2-echarts";
import {PageService} from "./services/page.service";
import {NewsComponent} from "./components/news.component";
import {LabelComponent} from "./components/label.component";
import {HttpService} from "./services/http.service";
import {ArticalInfoComponent} from "./components/artical-info.component";
import {QuillEditorModule} from 'ng2-quill-editor';
import {QuillComponent} from "./components/quill.component";
import {Ng2Component} from "./components/ng2.component";
import {LoginComponent} from "./components/login.component";
import {RegisterComponent} from "./components/register.component";
import {CommentComponent} from "./components/comment.component";
import {UserComponent} from "./components/user.component";
import {AllUserComponent} from "./components/all-user.component";
import {RchartsComponent} from "./components/rcharts.component";

import {FroalaEditorModule, FroalaViewModule} from "angular2-froala-wysiwyg";
import {FroalaComponent} from "./components/froala.component";
import {MessageComponent} from "./components/message.component";
import {NumberDirective} from "./directives/number.directive";
const myRouter:Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "artical",
    component: ArticalComponent
  },
  {
    path: "artical/:id",
    component: ArticalInfoComponent
  },
  {
    path: "label",
    component: LabelComponent
  },
  {
    path: "ng2",
    component: Ng2Component
  },
  {
    path: "node",
    component: NodeComponent,
  },
  {
    path: "all_users",
    component: AllUserComponent
  },
  {
    path: "**",
    redirectTo: "blog"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    NodeComponent,
    TechnologyComponent,
    ArticalComponent,
    ShareComponent,
    ChartsComponent,
    Ng2Echarts,
    NewsComponent,
    LabelComponent,
    ArticalInfoComponent,
    QuillComponent,
    Ng2Component,
    LoginComponent,
    RegisterComponent,
    CommentComponent,
    UserComponent,
    AllUserComponent,
    RchartsComponent,
    FroalaComponent,
    MessageComponent,

    NumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    QuillEditorModule,
    DropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot(myRouter, {useHash: true})
  ],
  providers: [
    PageService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
