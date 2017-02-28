// 这是一个富文本框编辑器, 他的内容肯定是要传递给组件的。
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: "blog-quill",
  templateUrl: "../templates/quill.tpl.html"
})
export class QuillComponent {
  // 1. 定义
  @Output() quillText = new EventEmitter();
  // 文本框的初始值是从父组件获取的
  @Input() editorContent: string;

  // 配置编辑器提醒文字
  public editorConfig = {
    placeholder: "请输入内容"
  };

  constructor() {
    this.editorContent = "";
  }

  // 触发事件 html标记语言， text文本
  onContentChanged({quill, html, text}) {
    console.log(quill, html, text);
    this.editorContent = html;
    // 2. 发射
    this.quillText.emit(this.editorContent);
  }
}
