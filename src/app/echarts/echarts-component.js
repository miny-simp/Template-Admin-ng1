'use strict';

define([
    'workspace/workspace.module',
    'text!echarts/echarts-template.html',
    'css!echarts/echarts.css'
], function(workspaceModule, EchartsTemplate) {
    workspaceModule.component('echartsComp', {
        template: EchartsTemplate,
        controller: function() {
            var pieChart = echarts.init(document.getElementById('piechart-example'));
            var pieChartOption = {
                theme: '',
                event: [{
                    type: 'click',
                    cb: function(res) {
                        console.log(res);
                    }
                }],
                title: {
                    text: 'NiceFish访问用户地区分布',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['深圳', '北京', '广州', '上海', '长沙']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    startAngle: -180,
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{
                        value: 3350,
                        name: '深圳'
                    }, {
                        value: 310,
                        name: '北京'
                    }, {
                        value: 234,
                        name: '广州'
                    }, {
                        value: 135,
                        name: '上海'
                    }, {
                        value: 1548,
                        name: '长沙'
                    }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
            pieChart.setOption(pieChartOption);

            var barChart = echarts.init(document.getElementById('barchart-example'));
            var barChartOption = {
                title: {
                    text: 'NiceFish月访问量统计',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: '{b}月{a}:{c}'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '访问量',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
                }]
            };
            barChart.setOption(barChartOption);

            var lineChart = echarts.init(document.getElementById('linechart-example'));
            var lineChartOption = {
                title: {
                    text: 'NiceFish月访问趋势图',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 次'
                    }
                },
                series: [{
                        name: '访问量',
                        type: 'line',
                        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
                    }

                ]
            };
            lineChart.setOption(lineChartOption);
        }
    });
});
