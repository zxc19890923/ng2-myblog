import {Component} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {Md5} from "ts-md5/dist/md5";
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";
@Component({
  selector: "blog-register",
  templateUrl: "../templates/register.tpl.html"
})
export class RegisterComponent {
  username:string;
  password:string;
  second_password:string;
  phone:string;
  email:string;
  address:string;

  message:string;

  constructor(public httpService:HttpService, public router:Router) {
    this.message = "";
  }

  registerHandel() {
    if (this.username == "" || this.password == "" || this.phone == "") {
      this.message = "请填写必填字段";
    }
    else if (this.password != this.second_password) {
      this.message = "两次输入密码不一致";
    }
    else {
      var url = "http://localhost:3000/register_user";
      var params = new URLSearchParams();
      params.set("username", this.username);
      params.set("password", Md5.hashStr(this.password).toString());
      params.set("phone", this.phone);
      params.set("email", this.email);
      params.set("address", this.address);

      console.log(params.toString());
      this.httpService.httpGet(url, params).subscribe(res=> {
        console.log(res);
        if (res.affectedRows > 0) {
          this.message = "注册成功, 界面正在跳转";
          setTimeout(()=> {
            this.router.navigateByUrl("login");
          }, 1000);
        }
      });
    }
  }
}
