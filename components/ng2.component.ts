import {Component} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {HttpService} from "../services/http.service";
@Component({
  selector: "blog-ng2",
  templateUrl: '../templates/ng2.tpl.html'
})
export class Ng2Component {
  title:string;
  author:string;
  content:string;

  constructor(public httpServer:HttpService) {
    this.title = "";
    this.author = "";
    this.content = "";
  }

  // 获取富文本编辑框的值
  childHandel(event) {
    this.content = event;
  }

  // 表单提交
  formHandel() {
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    var datetime = date + time;

    console.log(time);
    var params = new URLSearchParams();
    params.set("title", this.title);
    params.set("author", this.author);
    params.set("content", this.content);
    params.set("time", datetime);
    // 1 表示ng2文章
    params.set("type", "1");
    var url = "http://localhost:3000/insert_artical";

    console.log(params.toString());
    this.httpServer.httpGet(url, params).subscribe(res=> {
      console.log(res);
      if (res.affectedRows > 0) {
        window.location.href = "/blog";
      }
      else {
        alert("信息填写有误, 请刷新重试!");
      }
    });
  }
}
