import {Component} from "@angular/core";
@Component({
  selector: "blog-rcharts",
  templateUrl: "../templates/rcharts.tpl.html"
})
export class RchartsComponent {
  option = {
    color: ['#468dcc'],
    tooltip : {
      trigger: '活跃度',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'活跃度',
        type:'bar',
        barWidth: '60%',
        data:[90, 52, 60, 84, 90, 30, 20]
      }
    ]
  };
}
