import {Component, OnInit, Input} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "blog-comment",
  templateUrl: "../templates/comment.tpl.html"
})
export class CommentComponent implements OnInit {
  data: Array<Object>;
  @Input() cid: number;
  constructor(public httpService: HttpService) {
    this.data = [];
  }

  ngOnInit() {
    var url = "http://localhost:3000/select_comment";
    var params = new URLSearchParams();
    params.set("cid", this.cid.toString());
    console.log(params.toString());
    this.httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
