import {Component} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "blog-ng2",
  templateUrl: "../templates/blog.tpl.html"
})
export class BlogComponent {
  message:string;

  constructor(public httpService:HttpService) {

  }

  froalaText(event) {
    console.log(event);
    this.message = event;
  }

  messageHandel() {
    if (sessionStorage.getItem("username") == null) {
      alert("请先登录后, 在做评价!");
    }
    else if (this.message == "" || this.message == undefined) {
      alert("内容不能为空");
      return false;
    }
    else {
      var url = "http://localhost:3000/insert_message";
      var time = new Date().toLocaleDateString();
      var params = new URLSearchParams();
      params.set("message", this.message);
      params.set("time", time);
      params.set("author", sessionStorage.getItem("username"));
      this.httpService.httpGet(url, params).subscribe(res=> {
        console.log(res);
        if (res.affectedRows > 0) {
          window.location.reload();
        }
        else {
          alert("未知错误,请刷新重试!");
        }
      });
    }
  }
}
