import React, { Component } from "react";
import MasterPage from "../layout/MasterPage";
import { Table, Divider, Tag, Progress } from "antd";
import "./index.scss";
import echarts from "echarts";

class WeekCard extends Component {

  componentDidMount(){
    this.init();
  }

  
  init(){
    // echarts 实例初始化
    let weekCharts =  echarts.init(document.querySelector(`.weekCharts${this.props.id}`));
    weekCharts.setOption({
      grid:{
        top:10,
        bottom:0,
        left:10,
        right:10
      },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'transparent'
            }
        },
        // backgroundColor: 'rgba(255,255,255,1)',
        // padding: [5, 10],
        // textStyle: {
        //     color: '#7588E4',
        // },
        // extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    xAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
          show:false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
          show:false,
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            // margin: 10,
            show:false,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '订单量',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['0', '800', '108', '700', '406', '366', '20'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(178, 240, 209,1)'
                }, {
                    offset: 1,
                    color: 'rgba(178, 240, 209,1)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#04CD68'
            }
        },
        lineStyle: {
            normal: {
                width: 2
            }
        }
    }]
    },true);
    //页面大小改变 ehcarts 重新渲染自适应
   window.addEventListener("resize",()=>{
      this.init();
      weekCharts.resize();
   })
    
  }








  render() {
   
    return (
    <div className="weekCard-container">
        <p className="title">
            <span>订单量</span>
            <span>周</span>
        </p>
        <div className="number">1680</div>
        <div className="volum">
        <div className={`weekCharts${this.props.id}`} style={{width:"100%",height:"40px"}}>
          {/* echarts 图表 */}
        </div>
        </div>
        <div className="total">
            <span>开票率</span>
            <span>60%</span>
        </div>
    </div>
    );
  }
}

export default WeekCard;
