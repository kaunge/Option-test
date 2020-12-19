 //線圖
 var line_x = [10000, 12000, 14000, 16000, 18000];
 var profit_line = [null, null, 0, 0, 0];
 var loss_line = [0, 0, 0, null, null];
 var bs_line = [null, null, null, null, null];
 let myChart = document.getElementById('myChart').getContext('2d');
 // Global Options
 Chart.defaults.global.defaultFontFamily = 'Lato';
 Chart.defaults.global.defaultFontSize = 18;
 Chart.defaults.global.defaultFontColor = '#777';
 let lineChart = new Chart(myChart, {
     zoomEnabled: true,
     type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
     data: {
         labels: line_x, //x軸
         datasets: [{
             label: 'profit',
             data: profit_line, //y軸
             backgroundColor: [
                 'rgba(244, 14, 10, 0.5)',
             ],
             borderColor: 'red',
             borderWidth: 1,
             pointHitRadius: 0.75,
             pointRadius: 0.75,
             
         }, {
             label: 'loss',
             borderColor: 'green',
             data: loss_line, //y軸
             pointHitRadius: 0.75,
             pointRadius: 0.75,
             borderWidth: 1,
             backgroundColor: [
                 'rgba(119, 191, 63, 0.5)'
             ]
         }, {
             label: 'bs_1',
             borderColor: '#006699',//藍色
             pointHitRadius: 0.75,
             pointRadius: 0,
             borderWidth: 1,
             data: bs_line, //y軸
             backgroundColor: [
                 'rgba(0%,0%,0%,0%)'//透明
             ]
         }, {
             label: 'bs_2',
             borderColor: '#0099E5',//藍色
             pointHitRadius: 0.75,
             pointRadius: 0,
             borderWidth: 1,
             data: bs_line, //y軸
             backgroundColor: [
                 'rgba(0%,0%,0%,0%)'//透明
             ]
         }, {
             label: 'bs_3',
             borderColor: '#3382AA',//藍色
             pointHitRadius: 0.75,
             pointRadius: 0,
             borderWidth: 1,
             data: bs_line, //y軸
             backgroundColor: [
                 'rgba(0%,0%,0%,0%)'//透明
             ]
         }, {
             label: 'bs_4',
             borderColor: '#45B0E5',//藍色
             pointHitRadius: 0.75,
             pointRadius: 0,
             borderWidth: 1,
             data: bs_line, //y軸
             backgroundColor: [
                 'rgba(0%,0%,0%,0%)'//透明
             ]
         }, {
             label: '',
             borderColor: '#FFFFFF',//藍色
             pointHitRadius: 0.75,
             pointRadius: 0,
             borderWidth: 1,
             display: false,
             data: bs_line, //y軸
             backgroundColor: [
                 'rgba(0%,0%,0%,0%)'//透明
             ]
         }]
     },
     options: {
         title: {
             display: true,
             text: 'profit & loss', //圖表標頭
             fontSize: 20
         },
         legend: {
             display: false,
             position: 'right',
             labels: {
                 //filter: function(lineChart.data.datasets[6], myChart) {
                 // Logic to remove a particular legend item goes here
                 //return !lineChart.data.datasets[6].text.includes('bs_5_day');
                 //}
                 fontColor: 'black' //說明文字
             },

         },
         layout: {
             padding: {
                 left: 0,
                 right: 0,
                 bottom: 0,
                 top: 0
             }
         },
         tooltips: {
             enabled: true
         },
         scales: {
             xAxes: [{ //x軸
                 id: 'profit&loss',
                 ticks: {
                     autoSkip: true,
                     maxTicksLimit: 7,
                     stepSize: 500,//值的標籤為每50一個
                     callback: function (value, index, values) {
                         var first = (value / 1000 - ((value % 1000) / 1000))
                         var valueplus = ',' + (value - first * 1000)
                         var test = value.toString();
                         //function FormatNumber(n) {
                         //n += "";
                         //var arr = n.split(".");
                         //var re = /(\d{1,3})(?=(\d{3})+$)/g;
                         //return arr[0].replace(re, "$1,") + (arr.length == 2 ? "." + arr[1] : "");
                         //}
                         return test; //標籤增加符號
                     }
                 }
             }],
             yAxes: [{ //y軸
                 id: 'strike',
                 tick: {
                     stepSize: 500,
                     callback: function (value, index, values) {
                         return '$' + value; //標籤增加符號
                     }
                 }
             }]
         }
     }
 });

 window.addEventListener('resize', function () {
     lineChart.resize();
 })