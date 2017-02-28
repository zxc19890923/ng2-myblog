import {Component} from "@angular/core";
@Component({
    selector: "blog-charts",
    templateUrl: "../templates/charts.tpl.html"
})
export class ChartsComponent {
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
            data: ['ng2', 'node', 'express', 'ionic2', '微信小程序', 'bootstrap']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        series: [
            {
                name: '技术统计',
                type: 'pie',
                radius: [20, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [
                    {value: 50, name: 'ng2'},
                    {value: 5, name: 'node'},
                    {value: 6, name: 'express'},
                    {value: 7, name: 'ionic2'},
                    {value: 10, name: '微信小程序'},
                    {value: 40, name: 'bootstrap'}
                ]
            },
            {
                name: '文章活跃度',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                    {value: 50, name: 'ng2'},
                    {value: 5, name: 'node'},
                    {value: 15, name: 'express'},
                    {value: 25, name: 'ionic2'},
                    {value: 20, name: '微信小程序'},
                    {value: 35, name: 'bootstrap'},
                ]
            }
        ]
    };
}