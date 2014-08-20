(function(){
var app = angular.module("plotter",[]);
 
 app.controller("PlotController",['$scope',function($scope){

    
 	$scope.plotProperties = plotProperties;
 	$scope.plotData = plotData;
     

	$scope.plotChart = function(chartType){
 
 	$scope.chartType = chartType;
 	$scope.container ='container';
 	$scope.draw();
	};

	$scope.draw = function(){

    var firstChart = new Highcharts.Chart({
        chart:{
            renderTo: $scope.container,
            type:$scope.chartType
        },
        title: {
            text: $scope.plotProperties.title,
            x: $scope.plotProperties.xTitle
        },
        subtitle: {
            text: $scope.plotProperties.subTitle,
            x: $scope.plotProperties.xSubTitle
        },
        xAxis: {
            categories: $scope.plotData.categories
        },
        yAxis: {
            title: {
                text: $scope.plotProperties.yAxisTitle
            },
            plotLines: $scope.plotProperties.yAxisPlotLines
        },
        tooltip: {
            valueSuffix: $scope.plotProperties.tooltipValueSuffix
        },
        legend: {
            layout: $scope.plotProperties.legendLayout,
            align: $scope.plotProperties.legendAlignment,
            verticalAlign: $scope.plotProperties.legandVerticalAlignment,
            borderWidth: $scope.plotProperties.legandBorderWidth
        },
        series: $scope.plotData.series
    });
};
 	
 }]);

 var plotProperties = {

 	 title : 'Monthly Average Temperature',
     subTitle :'Source: WorldClimate.com',
     xTitle : -20, 
     xSubTitle : -20,
     yAxisTitle : 'Temperature (°C)',
     yAxisPlotLines : [{
                value: 0,
                width: 1,
                color: '#139889'
            }],
     tooltipValueSuffix : '°C',
     legendLayout : 'vertical',
     legendAlignment : 'right',
     legandVerticalAlignment : 'middle',
     legandBorderWidth : 0 

 };
 var plotData = {

 		 categories : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         series : [{
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
 };

})();