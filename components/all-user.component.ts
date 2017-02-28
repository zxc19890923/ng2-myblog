import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "blog-all-user",
  templateUrl: "../templates/all-user.tpl.html"
})
export class AllUserComponent implements OnInit {
  data:Array<Object>;
  id:string;
  username:string;
  phone:string;
  email:string;
  address:string;

  constructor(public httpService:HttpService) {

  }

  ngOnInit() {
    var url = "http://localhost:3000/users";
    this.httpService.httpGet(url, '').subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }

  // 删除用户
  deleteUser(id) {
    if (confirm("您确定要删除此用户吗?")) {
      var url = "http://localhost:3000/delete_user";
      var params = new URLSearchParams();
      params.set("id", id);
      this.httpService.httpGet(url, params).subscribe(res=> {
        console.log(res);
        if (res.affectedRows > 0) {
          window.location.reload();
        }
        else {
          alert("删除失败!");
        }
      });
    }
    else {
      return false;
    }
  }

  // 单机编辑按钮, 获取老数据, 初始化编辑框的内容
  updateUser(id, phone, email, address) {
    console.log(id + phone + email + address);
    this.id = id;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }

  // 编辑资料
  editUserInfo() {
    var url = "http://localhost:3000/update_user";
    var params = new URLSearchParams();
    params.set("id", this.id);
    params.set("phone", this.phone);
    params.set("email", this.email);
    params.set("address", this.address);

    this.httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      if(res.affectedRows > 0) {
        window.location.reload();
      }
      else {
        alert("修改失败, 请刷新重试!");
      }
    });
  }
}
