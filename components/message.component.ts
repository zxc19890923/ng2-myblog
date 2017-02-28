import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
@Component({
  selector: "blog-message",
  templateUrl: "../templates/message.tpl.html"
})
export class MessageComponent implements OnInit {
  data:Array<Object>;

  constructor(public httpService:HttpService) {

  }

  ngOnInit() {
    var url = "http://localhost:3000/select_message";
    this.httpService.httpGet(url, '').subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
