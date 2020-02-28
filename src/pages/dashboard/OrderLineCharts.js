import React, { Component } from "react";
import MasterPage from "../../components/layout/MasterPage";
import { Table, Divider, Tag, Tabs, DatePicker } from "antd";
import "./dashboard.scss";
import echarts from "echarts"



class OrderLineCharts extends Component {

    componentDidMount(){
        this.init();
      }
    
      
      init(){
        // echarts 实例初始化
        let weekCharts =  echarts.init(document.querySelector(`.charts-left`));
        weekCharts.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                color: ["#F58080", "#47D8BE", "#F9A589"],
                data: ['订单数', '订单金额'],
                left: 'center',
                bottom: 'bottom'
            },
            grid: {
                top: 'middle',
                left: '3%',
                right: '4%',
                bottom: '3%',
                height: '80%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                axisLine: {
                    lineStyle: {
                        color: "#999"
                    }
                }
            },
            yAxis: {
                type: 'value',
        
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#333"
                    },
                },
                nameTextStyle: {
                    color: "#999"
                },
                splitArea: {
                    show: false
                }
            },
            series: [{
                    name: '订单数',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 2,
                    data: [800,900,220,130,660,289,102,45,88,99,105,150],
                    color: "#F58080",
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFCAD4' // 0% 处的颜色
                                }, {
                                    offset: 0.4,
                                    color: '#F58080' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#F58080' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(245,128,128, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F58080',
                            borderWidth: 3,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#F58080"
                        }
                    },
                    smooth: true
                },
                {
                    name: '订单金额',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 5,
                    data: [123,568,111,222,123,56],
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: {
                                type: 'linear',
        
                                colorStops: [{
                                        offset: 0,
                                        color: '#AAF487' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 2,
                            // shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#AAF487',
                            borderWidth: 3,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#AAF487"
                        }
                    },
                    smooth: true
                }
            ]
        },true);
        //页面大小改变 ehcarts 重新渲染自适应
       window.addEventListener("resize",()=>{
          this.init();
          weekCharts.resize();
       })
        
      }




   

    render() {

        return (
            <div className="charts-left" style={{width:"60%",height:"300px"}}>

            </div>);
    }
}

export default OrderLineCharts;
