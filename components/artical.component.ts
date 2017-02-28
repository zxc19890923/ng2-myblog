import {Component} from "@angular/core";
import {HttpService} from "../services/http.service";
@Component({
  selector: "blog-artical",
  templateUrl: "../templates/artical.tpl.html"
})
export class ArticalComponent {
  data:Array<Object>;

  constructor(public httpService:HttpService) {

  }

  ngOnInit() {
    var url = "http://localhost:3000/artical";
    this.httpService.httpGet(url, '').subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
