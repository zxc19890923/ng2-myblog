import {Component, OnInit} from "@angular/core";
@Component({
  selector: "blog-navbar",
  templateUrl: "../templates/navbar.tpl.html"
})
export class NavbarComponent implements OnInit {
  status:string;
  username:string;

  constructor() {

  }

  ngOnInit() {
    this.status = sessionStorage.getItem("status");
    this.username = sessionStorage.getItem("username");
    console.log(this.status);
  }

  goOut() {
    sessionStorage.clear();
    window.location.reload();
  }
}
