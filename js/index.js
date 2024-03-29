window.addEventListener("load",function () {
    let main=document.querySelectorAll(".echarts");


    let bar = echarts.init(main[0]);
    let line=echarts.init(main[1]);
    let pie =echarts.init(main[2]);
    let barOption = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    let lineOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {},
        legend: {
            data:['销量',"日期"],
            left:"left",
            textStyle: {
                color: 'green'

            }
        },

        series: [{
            name: '销量',
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data:[
                {value:820, name:'Mon'},
                {value:932, name:'Tue'},
                {value:901, name:'Wed'},
                {value:934, name:'Thu'},
                {value:1290, name:'Fri'},
                {value:1330, name:'Sat'},
                {value:1320, name:'Sun'}
            ],
            type: 'line',

        }]
    }

    //饼图
    let pieOption = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    bar.setOption(barOption);
    line.setOption(lineOption);
    pie.setOption(pieOption);




},false)