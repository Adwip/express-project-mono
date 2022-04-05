var Penjualan_terbanyak = function(){
    var chart = {
               type: 'pie',
               options3d: {
                  enabled: true,
                  alpha: 45         
               }
            };
            var title = {
               text: 'Contents of Highsoft\'s weekly fruit delivery'   
            };   
            var subtitle = {
               text: '3D donut in Highcharts'
            };  
            var plotOptions = {
               pie: {
                  innerSize: 100,
                  depth: 45
               }
            };   
            var series = [{
               name: 'Delivered amount',
               data: [
                  ['Bananas', 8],
                  ['Kiwi', 3],
                  ['Mixed nuts', 1],
                  ['Oranges', 6],
                  ['Apples', 8],
                  ['Pears', 4],
                  ['Clementines', 4],
                  ['Reddish (bag)', 1],
                  ['Grapes (bunch)', 1]
               ]
            }];     
            
            var json = {};   
            json.chart = chart; 
            json.title = title;       
            json.subtitle = subtitle; 
            json.plotOptions = plotOptions; 
            json.series = series;   
            $('#grafik-2').highcharts(json);
}

var Pengunjung_toko = function(){
   var chart = {
       type: 'spline'
    }; 
    var title = {
       text: 'Snow depth at Vikjafjellet, Norway'   
    };
    var subtitle = {
       text: 'Irregular time data in Highcharts JS'
    };
    var xAxis = {
       type: 'datetime',
       dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
       },
       title: {
          text: 'Date'
       }
    };
    var yAxis = {
       title: {
          text: 'Snow depth (m)'
       },
       min: 0
    };
    var tooltip = {
       headerFormat: '<b>{series.name}</b><br>',
       pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    };
    var plotOptions = {
       spline: {
          marker: {
             enabled: true
          }
       }
    };
    var series = [
       {
          name: 'Winter 2007-2008',
             // Define the data points. All series have a dummy year
             // of 1970/71 in order to be compared on the same x axis.
             // Note that in JavaScript, months start at 0 for January,
             // 1 for February etc.
          data: [
             [Date.UTC(1970,  9, 27), 0   ],
             [Date.UTC(1970, 10, 10), 0.6 ],
             [Date.UTC(1970, 10, 18), 0.7 ],
             [Date.UTC(1970, 11,  2), 0.8 ],
             [Date.UTC(1970, 11,  9), 0.6 ],
             [Date.UTC(1970, 11, 16), 0.6 ],
             [Date.UTC(1970, 11, 28), 0.67],
             [Date.UTC(1971,  0,  1), 0.81],
             [Date.UTC(1971,  0,  8), 0.78],
             [Date.UTC(1971,  0, 12), 0.98],
             [Date.UTC(1971,  0, 27), 1.84],
             [Date.UTC(1971,  1, 10), 1.80],
             [Date.UTC(1971,  1, 18), 1.80],
             [Date.UTC(1971,  1, 24), 1.92],
             [Date.UTC(1971,  2,  4), 2.49],
             [Date.UTC(1971,  2, 11), 2.79],
             [Date.UTC(1971,  2, 15), 2.73],
             [Date.UTC(1971,  2, 25), 2.61],
             [Date.UTC(1971,  3,  2), 2.76],
             [Date.UTC(1971,  3,  6), 2.82],
             [Date.UTC(1971,  3, 13), 2.8 ],
             [Date.UTC(1971,  4,  3), 2.1 ],
             [Date.UTC(1971,  4, 26), 1.1 ],
             [Date.UTC(1971,  5,  9), 0.25],
             [Date.UTC(1971,  5, 12), 0   ]
          ]
       }, 
       {
          name: 'Winter 2008-2009',
          data: [
             [Date.UTC(1970,  9, 18), 0   ],
             [Date.UTC(1970,  9, 26), 0.2 ],
             [Date.UTC(1970, 11,  1), 0.47],
             [Date.UTC(1970, 11, 11), 0.55],
             [Date.UTC(1970, 11, 25), 1.38],
             [Date.UTC(1971,  0,  8), 1.38],
             [Date.UTC(1971,  0, 15), 1.38],
             [Date.UTC(1971,  1,  1), 1.38],
             [Date.UTC(1971,  1,  8), 1.48],
             [Date.UTC(1971,  1, 21), 1.5 ],
             [Date.UTC(1971,  2, 12), 1.89],
             [Date.UTC(1971,  2, 25), 2.0 ],
             [Date.UTC(1971,  3,  4), 1.94],
             [Date.UTC(1971,  3,  9), 1.91],
             [Date.UTC(1971,  3, 13), 1.75],
             [Date.UTC(1971,  3, 19), 1.6 ],
             [Date.UTC(1971,  4, 25), 0.6 ],
             [Date.UTC(1971,  4, 31), 0.35],
             [Date.UTC(1971,  5,  7), 0   ]
          ]
       }, 
       {
          name: 'Winter 2009-2010',
          data: [
             [Date.UTC(1970,  9,  9), 0   ],
             [Date.UTC(1970,  9, 14), 0.15],
             [Date.UTC(1970, 10, 28), 0.35],
             [Date.UTC(1970, 11, 12), 0.46],
             [Date.UTC(1971,  0,  1), 0.59],
             [Date.UTC(1971,  0, 24), 0.58],
             [Date.UTC(1971,  1,  1), 0.62],
             [Date.UTC(1971,  1,  7), 0.65],
             [Date.UTC(1971,  1, 23), 0.77],
             [Date.UTC(1971,  2,  8), 0.77],
             [Date.UTC(1971,  2, 14), 0.79],
             [Date.UTC(1971,  2, 24), 0.86],
             [Date.UTC(1971,  3,  4), 0.8 ],
             [Date.UTC(1971,  3, 18), 0.94],
             [Date.UTC(1971,  3, 24), 0.9 ],
             [Date.UTC(1971,  4, 16), 0.39],
             [Date.UTC(1971,  4, 21), 0   ]
          ]
       }
    ];
    
    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;  
    json.series = series;
    json.plotOptions = plotOptions;
    $('#grafik-3').highcharts(json);
}

var peningkatan_penjualan = function(){
    var chart = {
        type: 'spline'      
     }; 
     var title = {
        text: 'Snow depth at Vikjafjellet, Norway'   
     };
     var subtitle = {
        text: 'Irregular time data in Highcharts JS'
     };
     var xAxis = {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
           month: '%e. %b',
           year: '%b'
        },
        title: {
           text: 'Date'
        }
     };
     var yAxis = {
        title: {
           text: 'Snow depth (m)'
        },
        min: 0
     };
     var tooltip = {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
     };
     var plotOptions = {
        spline: {
           marker: {
              enabled: true
           }
        }
     };
     var series = [
        {
           name: 'Winter 2007-2008',
              // Define the data points. All series have a dummy year
              // of 1970/71 in order to be compared on the same x axis.
              // Note that in JavaScript, months start at 0 for January,
              // 1 for February etc.
           data: [
              [Date.UTC(1970,  9, 27), 0   ],
              [Date.UTC(1970, 10, 10), 0.6 ],
              [Date.UTC(1970, 10, 18), 0.7 ],
              [Date.UTC(1970, 11,  2), 0.8 ],
              [Date.UTC(1970, 11,  9), 0.6 ],
              [Date.UTC(1970, 11, 16), 0.6 ],
              [Date.UTC(1970, 11, 28), 0.67],
              [Date.UTC(1971,  0,  1), 0.81],
              [Date.UTC(1971,  0,  8), 0.78],
              [Date.UTC(1971,  0, 12), 0.98],
              [Date.UTC(1971,  0, 27), 1.84],
              [Date.UTC(1971,  1, 10), 1.80],
              [Date.UTC(1971,  1, 18), 1.80],
              [Date.UTC(1971,  1, 24), 1.92],
              [Date.UTC(1971,  2,  4), 2.49],
              [Date.UTC(1971,  2, 11), 2.79],
              [Date.UTC(1971,  2, 15), 2.73],
              [Date.UTC(1971,  2, 25), 2.61],
              [Date.UTC(1971,  3,  2), 2.76],
              [Date.UTC(1971,  3,  6), 2.82],
              [Date.UTC(1971,  3, 13), 2.8 ],
              [Date.UTC(1971,  4,  3), 2.1 ],
              [Date.UTC(1971,  4, 26), 1.1 ],
              [Date.UTC(1971,  5,  9), 0.25],
              [Date.UTC(1971,  5, 12), 0   ]
           ]
        }, 
        {
           name: 'Winter 2008-2009',
           data: [
              [Date.UTC(1970,  9, 18), 0   ],
              [Date.UTC(1970,  9, 26), 0.2 ],
              [Date.UTC(1970, 11,  1), 0.47],
              [Date.UTC(1970, 11, 11), 0.55],
              [Date.UTC(1970, 11, 25), 1.38],
              [Date.UTC(1971,  0,  8), 1.38],
              [Date.UTC(1971,  0, 15), 1.38],
              [Date.UTC(1971,  1,  1), 1.38],
              [Date.UTC(1971,  1,  8), 1.48],
              [Date.UTC(1971,  1, 21), 1.5 ],
              [Date.UTC(1971,  2, 12), 1.89],
              [Date.UTC(1971,  2, 25), 2.0 ],
              [Date.UTC(1971,  3,  4), 1.94],
              [Date.UTC(1971,  3,  9), 1.91],
              [Date.UTC(1971,  3, 13), 1.75],
              [Date.UTC(1971,  3, 19), 1.6 ],
              [Date.UTC(1971,  4, 25), 0.6 ],
              [Date.UTC(1971,  4, 31), 0.35],
              [Date.UTC(1971,  5,  7), 0   ]
           ]
        }, 
        {
           name: 'Winter 2009-2010',
           data: [
              [Date.UTC(1970,  9,  9), 0   ],
              [Date.UTC(1970,  9, 14), 0.15],
              [Date.UTC(1970, 10, 28), 0.35],
              [Date.UTC(1970, 11, 12), 0.46],
              [Date.UTC(1971,  0,  1), 0.59],
              [Date.UTC(1971,  0, 24), 0.58],
              [Date.UTC(1971,  1,  1), 0.62],
              [Date.UTC(1971,  1,  7), 0.65],
              [Date.UTC(1971,  1, 23), 0.77],
              [Date.UTC(1971,  2,  8), 0.77],
              [Date.UTC(1971,  2, 14), 0.79],
              [Date.UTC(1971,  2, 24), 0.86],
              [Date.UTC(1971,  3,  4), 0.8 ],
              [Date.UTC(1971,  3, 18), 0.94],
              [Date.UTC(1971,  3, 24), 0.9 ],
              [Date.UTC(1971,  4, 16), 0.39],
              [Date.UTC(1971,  4, 21), 0   ]
           ]
        }
     ];
     
     var json = {};
     json.chart = chart;
     json.title = title;
     json.subtitle = subtitle;
     json.tooltip = tooltip;
     json.xAxis = xAxis;
     json.yAxis = yAxis;  
     json.series = series;
     json.plotOptions = plotOptions;
     $('#grafik-1').highcharts(json);
}

var semi_circle_chart = function(){
   var chart = {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: '55%'
   };
   var subtitle = {
      text: 'Irregular time data in Highcharts JS'
   };
   var title = {
      text: ' '
   };      
   var tooltip = {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   };
   var plotOptions = {
      pie: {
         dataLabels: {
            enabled: false,
            distance: -50,
            
            style: {
               fontWeight: 'bold',
               color: 'white',
               textShadow: '0px 1px 2px black'
            }
         },
         startAngle: -90,
         endAngle: 90,
         center: ['50%', '75%'],
         showInLegend: true
      }
   };
   var series = [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
         ['Firefox',   51.0],
         ['IE',       26.8],
         ['Chrome', 12.8],
         ['Safari',    8.5],
         // ['Opera',     6.2],
         {
            name: 'Others',
            y: 0.7,
            dataLabels: {
               enabled: false
            }
         }
      ]
   }];     

   var json = {};   
   json.chart = chart; 
   json.title = title;
   // json.subtitle = subtitle;     
   json.tooltip = tooltip;  
   json.series = series;
   json.plotOptions = plotOptions;
   $('#grafik-4').highcharts(json);
}

var chart_batang_banding = function(){
   var chart = {
      type: 'bar'
   };
   var title = {
      text: 'Historic World Population by Region'   
   };
   var subtitle = {
      text: 'Source: Wikipedia.org'  
   };
   var xAxis = {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
         text: null
      }
   };
   var yAxis = {
      min: 0,
      title: {
         text: 'Population (millions)',
         align: 'high'
      },
      labels: {
         overflow: 'justify'
      }
   };
   var tooltip = {
      valueSuffix: ' millions'
   };
   var plotOptions = {
      bar: {
         dataLabels: {
            enabled: true
         }
      },
      series: {
         stacking: 'normal'
      }
   };
   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 100,
      floating: true,
      borderWidth: 1,
      
      backgroundColor: (
         (Highcharts.theme && Highcharts.theme.legendBackgroundColor)
         || '#FFFFFF'),
      shadow: true
   };
   var credits = {
      enabled: false
   };
   var series = [
      {
         name: 'Year 1800',
         data: [107, 31, 635, 203, 2]
      }, 
      {
         name: 'Year 1900',
         data: [133, 156, 947, 408, 6]
      }, 
      {
         name: 'Year 2008',
         data: [973, 914, 4054, 732, 34]      
      }
   ];

   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.subtitle = subtitle; 
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;
   json.legend = legend;
   json.credits = credits;
   $('#grafik-5').highcharts(json);
}

$(document).ready(function(){
    Penjualan_terbanyak()
    peningkatan_penjualan()
    Pengunjung_toko()
    semi_circle_chart()
    chart_batang_banding()
})
//data_visualization/Graphic_data_v/Dashboard_grafik.js