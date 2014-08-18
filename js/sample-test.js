
 $(function () {
    $( "#plotLineChart" ).click(function() {
 
        plotChart('line');
    }); 
    $( "#plotBarChart" ).click(function() {
       
        plotChart('bar');
    }); 
    $( "#plotPieChart" ).click(function() {
    
        plotChart('pie');
    }); 	 
});

var plotChart =function(chartType){
    var container ='container'
    var title = 'Monthly Average Temperature';
    var subTitle = 'Source: WorldClimate.com';
    var xTitle =  -20; 
    var xSubTitle = -20;
    var yAxisTitle = 'Temperature (°C)';
    var yAxisPlotLines=[{
                value: 0,
                width: 1,
                color: '#139889'
            }];
    var tooltipValueSuffix = '°C';
    var legendLayout = 'vertical';
    var legendAlignment = 'right';
    var legandVerticalAlignment = 'middle';
    var legandBorderWidth = 0 ; 

     var categories =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var series = [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]

    var firstChart = new Highcharts.Chart({
        chart:{
            renderTo: container,
            type:chartType
        },
        title: {
            text: title,
            x: xTitle 
        },
        subtitle: {
            text: subTitle,
            x: xSubTitle
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
            plotLines: yAxisPlotLines
        },
        tooltip: {
            valueSuffix: tooltipValueSuffix
        },
        legend: {
            layout: legendLayout,
            align: legendAlignment,
            verticalAlign: legandVerticalAlignment,
            borderWidth: legandBorderWidth
        },
        series: series
    });
}
