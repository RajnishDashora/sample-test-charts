
 $(function () {
     var Plotter1 = new Plotter();
});


// plots or different type of representations of data 
var Plot = function(plotType,plotter){
     this.plotType = plotType;
     this.container ='container';
     this.plotter = plotter;
     this.initialize();
}

Plot.prototype = {

 initialize : function(){
         // Chart Poperties to initialize
     this.title = 'Monthly Average Temperature';
     this.subTitle = 'Source: WorldClimate.com';
     this.xTitle =  -20; 
     this.xSubTitle = -20;
     this.yAxisTitle = 'Temperature (°C)';
     this.yAxisPlotLines=[{
                value: 0,
                width: 1,
                color: '#139889'
            }];
     this.tooltipValueSuffix = '°C';
     this.legendLayout = 'vertical';
     this.legendAlignment = 'right';
     this.legandVerticalAlignment = 'middle';
     this.legandBorderWidth = 0 ; 
 },
 draw :function(){

    var firstChart = new Highcharts.Chart({
        chart:{
            renderTo: this.container,
            type:this.plotType
        },
        title: {
            text: this.title,
            x: this.xTitle 
        },
        subtitle: {
            text: this.subTitle,
            x: this.xSubTitle
        },
        xAxis: {
            categories: this.plotter.categories
        },
        yAxis: {
            title: {
                text: this.yAxisTitle
            },
            plotLines: this.yAxisPlotLines
        },
        tooltip: {
            valueSuffix: this.tooltipValueSuffix
        },
        legend: {
            layout: this.legendLayout,
            align: this.legendAlignment,
            verticalAlign: this.legandVerticalAlignment,
            borderWidth: this.legandBorderWidth
        },
        series: this.plotter.series
    });
}

}


//data to be ploted wrapped in plotter to initialize various plots 
var Plotter = function(){

     this.lineViewButtonElement=$("#plotLineChart");
     this.barViewButtonElement=$("#plotBarChart");

     this.renderData();
     this.initialize();    

}

Plotter.prototype = {

    renderData:function(){
     
      // TODO: ajax call hit the API to render data
     this.categories =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     this.series = [{
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
        }];

    },
    
    initialize: function(){
        self = this;

        this.lineViewButtonElement.click(function() {
        var chartView1 = new Plot('line',self);
        chartView1.draw();
         }); 

        this.barViewButtonElement.click(function() {  
        var chartView2 = new Plot('bar',self);
        chartView2.draw();
        }); 
  
    }

}