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



})();