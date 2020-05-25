import Echarts from './echarts';

const renderCluster = (id) => {
  const chart = Echarts.init(document.getElementById(id));
  const option = {
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      data: ['网络', '内存', 'CPU'],
      orient: 'verticall',
      icon: 'circle',
      top: 30,
      right: 5
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      height: 240,
      width: 430,
      containLabel: true
  },
  xAxis: {
      type: 'category',
      nameTextStyle: {
        color: '#fff'
      },
      boundaryGap: false,
      data: ['22:40', '22:30', '22:20', '22:10', '22:00', '21:50', '21:40']
  },
  yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      nameTextStyle: {
        color: '#fff'
      }
  },
  series: [
    {
     name:'网络',
     type:'line',
     itemStyle : {  
       normal : {  
       color:'#F3891B'
      },
      lineStyle:{
       normal:{
       color:'#F3891B',
       opacity:1
        }
      }
     },  
     data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
     name:'内存',
     type:'line',
     itemStyle : {  
       normal : {  
       color:'#006AD4'
      },
      lineStyle:{
       normal:{
       color:'#F3891B',
       opacity:1
        }
      }
     },
     data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
     name:'CPU',
     type:'line',
     itemStyle : {  
       normal : {  
       color:'#009895'
      },
      lineStyle:{
       normal:{
       color:'#009895',
       opacity:1
        }
      }
     },
     data:[150, 232, 201, 154, 190, 330, 410]
    }
   ]
}
  chart.setOption(option);
}
export default renderCluster;