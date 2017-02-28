/*
 1. Directive 用来定义指令
 2. #ElementRef 连接节点
 3. HostListener 监听事件
 4. Render 渲染新节点
 */
import {Directive, ElementRef, HostListener, Renderer} from "@angular/core";
@Directive({
  selector: '[numberDirective]'
})
export class NumberDirective {
  constructor(public el:ElementRef, public renderer:Renderer) {

  }

  @HostListener("blur") onBlur() {
    console.log(typeof(this.el.nativeElement.value));
    // 定义规则, 验证手机号码的正则表达式
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    var phoneNum = this.el.nativeElement.value;
    if (reg.test(phoneNum)) {
      this.renderer.setElementStyle(this.el.nativeElement, "border-right", "2px solid #42A948");
    }
    else {
      this.el.nativeElement.value = "";
      this.renderer.setElementStyle(this.el.nativeElement, "border-right", "2px solid #a94442");
    }
  }
}
