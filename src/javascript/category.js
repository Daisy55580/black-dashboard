import Echarts from './echarts';

const renderCategory = (id) => {
  const chart = Echarts.init(document.getElementById(id));
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 20,
      data: [{
        name: 'A机型',
        textStyle: {color: '#fff'}
      }, {
        name: 'B机型',
        textStyle: {color: '#fff'}
      }, {
        name: 'C机型',
        textStyle: {color: '#fff'}
      }, {
        name: 'D机型',
        textStyle: {color: '#fff'}
      }, {
        name: 'E机型',
        textStyle: {color: '#fff'}
      }, {
        name: 'F机型',
        textStyle: {color: '#fff'}
      }, {
        name: 'G机型',
        textStyle: {color: '#fff'}
      }]
    },
    series: [
      {
        name: '',
        type: 'pie',
        left: 60,
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          position: 'outer',
          alignTo: 'none',
          bleedMargin: 5
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true
        },
        data: [
          {value:7600, name:'A机型'},
          {value:6600, name:'B机型'},
          {value:15600, name:'C机型'},
          {value:5700, name:'D机型'},
          {value:4600, name:'E机型'},
          {value:4600, name:'F机型'},
          {value:3500, name:'G机型'}
        ]
      }
    ]
  };
  
  chart.setOption(option);
}

export default renderCategory;

