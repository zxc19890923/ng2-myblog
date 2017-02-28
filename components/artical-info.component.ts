import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "blog-artical-info",
  templateUrl: "../templates/artical-info.tpl.html"
})
export class ArticalInfoComponent implements OnInit {
  data:Array<Object>;
  param:number;
  status: string;

  quillHtml:string;

  edit_title:string;
  edit_author:string;
  edit_content:string;
  content:string;

  username:string;
  commonText:string;

  constructor(public r:ActivatedRoute, public httpService:HttpService) {
    this.param = 0;
    this.data = [];
    this.username = sessionStorage.getItem("username");
    this.status = sessionStorage.getItem("status");
  }

  ngOnInit() {
    this.param = this.r.snapshot.params["id"];
    var url = "http://localhost:3000/artical_info";
    var params = new URLSearchParams();
    params.set("id", this.param.toString());
    this.httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      this.data = res;


      this.edit_title = res[0].title;
      this.edit_author = res[0].author;
      this.edit_content = res[0].content;
      console.log(this.edit_content);
    });

  }

  // 获取子组件传递过来的数据
  childHandel(event) {
    console.log(event);
    this.quillHtml = event;
  }

  // 编辑资料, 获取信息
  editContent(event) {
    console.log(event);
    this.content = event;
  }

  editArtical() {
    var params = new URLSearchParams();
    params.set("title", this.edit_title);
    params.set("author", this.edit_author);
    params.set("content", this.content);
    params.set("id", this.param.toString());
    var url = "http://localhost:3000/update_artical";
    console.log(params);
    this.httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      if (res.affectedRows > 0) {
        window.location.reload();
      }
    });
  }

  // 单机评论查看是否登录, 登录用户才可以评论
  commentLogin() {
    if (this.username == null) {
      alert("请您先登录, 然后才能评论");
      return false;
    }
  }

  // 获取评论内容的函数
  com(event) {
    this.commonText = event;
  }

  // 提交评论
  comments() {
    var url = "http://localhost:3000/comment";
    var time = new Date().toLocaleDateString();
    var params = new URLSearchParams();
    params.set("cid", this.param.toString());
    params.set("username", this.username);
    params.set("content", this.commonText);
    params.set("time", time);


    console.log(params.toString());
    this.httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      if(res.affectedRows > 0) {
        window.location.reload();
      }
    })
  }

}
