import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
@Component({
  selector: "blog-label",
  templateUrl: "../templates/label.tpl.html"
})
export class LabelComponent implements OnInit {
  data: Array<Object>;
  constructor(public httpService:HttpService) {
    this.data = [];
  }

  ngOnInit() {
    var url = "http://localhost:3000/skill";
    this.httpService.httpGet(url, '').subscribe(res=> {
      console.log(res);
      this.data = res;
    }, err=> {
      console.log(err);
    });
  }
}
