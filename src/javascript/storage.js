import Echarts from './echarts';

const renderStorage = (id, name, data, rest, color) => {
  const chart = Echarts.init(document.getElementById(id));
  const option = {
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{b}: ({d}%)'
    // },
    legend: {
    //   orient: 'vertical',
      left: '30%',
      top: '90%',
      selectedMode: false,
      data: [{
        name,
        textStyle: {color: '#fff'}
      }]
    },
    series: [
      {
        name: '',
        type: 'pie',
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
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        // labelLine: {
        //   show: true
        // },
        data: [
          {
            value: data,
            name,
            label: {
              show: true,
              position: 'center',
              formatter: '{d}%'
            },
            itemStyle: {
              color,
            }
          },
          {
            value: rest,
            name: 'rest',
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              }
            },
            itemStyle: {
              color: '#9a9a91',
            }
          },
        ]
      }
    ]
  };
  
  chart.setOption(option);
}

export default renderStorage;
