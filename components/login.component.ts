import {Component} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
import {Md5} from "ts-md5/dist/md5";
import {Router} from "@angular/router";
@Component({
  selector: "blog-login",
  templateUrl: "../templates/login.tpl.html"
})
export class LoginComponent {
  username:string;
  password:string;
  message:string;

  constructor(public httpService:HttpService, public router:Router) {

  }

  loginHandel() {
    var url = "http://localhost:3000/login_user";
    var params = new URLSearchParams();
    params.set("username", this.username);
    params.set("password", Md5.hashStr(this.password).toString());
    this.httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      if (res.length > 0) {
        sessionStorage.setItem("status", "1");
        sessionStorage.setItem("username", this.username);
        // this.router.navigateByUrl("blog");
        window.location.href = "blog";
      }
      else {
        sessionStorage.setItem("status", "0");
      }
    });
  }
}

