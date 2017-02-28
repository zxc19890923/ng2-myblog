import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "blog-users",
  templateUrl: "../templates/users.tpl.html"
})
export class UserComponent implements OnInit {
  data: Array<Object>;
  constructor(public httpService: HttpService) {

  }
  ngOnInit() {
    var url = "http://localhost:3000/users";
    this.httpService.httpGet(url, '').subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
