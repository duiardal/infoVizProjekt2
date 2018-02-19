d3Test.controller('MainController', ['$scope','$routeParams','$rootScope', 'Model', '$interval', function($scope, $routeParams, $rootScope, Model, $interval) {

	//An interval functions thap updates every 200 second.
	//Thus, returning the value of the country that was just clicked.
	var test = "";	
    $interval(function(){
        $scope.returnCountry = test;
    }, 200);

    //Pre-declared variables
    var testList = [];
    $scope.showMap = true;
    $scope.dataset = {};
	$scope.yearVar = ["1994-1999", "2000-2004", "2005-2009", "2010-2014"];
	$scope.questionVar = ["Importance in life: Religion", "Importance in life: Family", "Importance in life: Friends", "Importance in life: Leisure Time", "Importance in life: Politics", "Importance in life: Work", "Feeling of Happiness", "State of Health"];
	$scope.selectedQuestion;
	$scope.selQuestion;
    var minValue = 0;
    var maxValue = 0;
    var selCountry;

    $scope.changeQuestion = function(selQuestion) {
    	$scope.selQuestion = selQuestion;
    	if (selQuestion == "Importance in life: Religion") {
    		$scope.selectedQuestion = $rootScope.importanceReligion;
    	}
    	else if (selQuestion == "Importance in life: Family") {
    		$scope.selectedQuestion = $rootScope.importanceFamily;
    	}
    	else if (selQuestion == "Importance in life: Friends") {
    		$scope.selectedQuestion = $rootScope.importanceFriends;
    	}
    	else if (selQuestion == "Importance in life: Leisure Time") {
    		$scope.selectedQuestion = $rootScope.importanceLeisure;
    	}
    	else if (selQuestion == "Importance in life: Politics") {
    		$scope.selectedQuestion = $rootScope.importancePolitics;
    	}
    	else if (selQuestion == "Importance in life: Work") {
    		$scope.selectedQuestion = $rootScope.importanceWork;
    	}
    	else if (selQuestion == "Feeling of Happiness") {
    		$scope.selectedQuestion = $rootScope.feelingOfHappiness;
    	}
    	else if (selQuestion == "State of Health") {
    		$scope.selectedQuestion = $rootScope.stateOfHealth;
    	}

    	$scope.makeMap();
    	console.log($scope.selectedQuestion);
    	return $scope.selectedQuestion;
    }

    //When a user changes year in the app, this function is called
    $scope.changeYear = function(selectedYear) {
    	$scope.showMap = false;
		$scope.assignISO(selectedYear);
    }

    // Function that assigns values for each year. A ISO-code for every country and its values.
	$scope.assignISO = function(selectedYear) {
	    var onlyValues = $scope.selectedQuestion.map(function(obj){
	    	tempArray = obj[selectedYear];
	    	var list = [];
	    	var tempAss =[];
	    	for (var i=0;i<tempArray.length;i++) {
	    		var strToInt = parseInt(tempArray[i]["Value"])
	    		list.push([tempArray[i]["ISO"], strToInt]);
	    		tempAss.push(strToInt);
	    	}
	    	minValue = Math.min.apply(null, tempAss),
	        maxValue = Math.max.apply(null, tempAss);
	        $scope.showMap = false;
	        $scope.color(list);
	    });
	}

	// Function to get the colors for each country's values from the "assignISO"-function
	$scope.color = function(list) {
		var paletteScale = d3.scale.linear()
            .domain([minValue,maxValue])
            .range(["#e5ebf0","#02386F"]);
	    for (var i=0; i < list.length; i++){
	    	var iso = list[i][0];
	    	var value = list[i][1];
	    	$scope.dataset[iso] = {numberOfThings: value, fillColor: paletteScale(value)};
	    }
	    //console.log($scope.dataset);
	    $scope.showMap = true;
	    $scope.makeMap();
	    $scope.dataset = {};
    }

	// Make the actual map and its options
	$scope.makeMap = function() {
		$scope.mapObject = {
			done: function(datamap) {
				datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
	                $scope.updateActiveGeography(geography);
	            });
	        },
			scope: 'world',
			options: {
				legendHeight: 60,
			},
			projection: 'mercator',
	        fills: { defaultFill: '#F5F5F5' },
	        data: $scope.dataset,
	        geographyConfig: {
	            borderColor: '#9b9b9b',
	            borderWidth: 1,
	            highlightBorderWidth: 3,
	            highlightFillColor: function(geo) {
	                return geo['fillColor'] || '#F5F5F5';
	            },
	            highlightBorderColor: '#9b9b9b',
	            popupTemplate: function(geo, data) {
	                if (!data) {return ; }
	                return ['<div class="hoverinfo">',
	                    '<strong>', geo.properties.name, '</strong>',
	                    '<br>Count: <strong>', data.numberOfThings, ' %</strong>',
	                    '</div>'].join('');
	            }
	        },
	        responsive: true
		}
	}

	// When a country is clicked, print out its name. This will be sent up to the interval function that will reload the page and thus, reloading the variable at the same time.
	$scope.updateActiveGeography = function(geography) {
		selCountry = geography.properties.name;
		if ($scope.selQuestion == "Importance in life: Religion") {
			d3.csv("/variables/importanceInLifeReligion.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "Importance in life: Family") {
    		d3.csv("/variables/importanceInLifeFamily.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "Importance in life: Friends") {
    		d3.csv("/variables/importanceInLifeFriends.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "Importance in life: Leisure Time") {
    		d3.csv("/variables/importanceInLifeLeisure.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "Importance in life: Politics") {
    		d3.csv("/variables/importanceInLifePolitics.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "Importance in life: Work") {
    		d3.csv("/variables/importanceInLifeWork.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "Feeling of Happiness") {
    		d3.csv("/variables/feelingOfHappiness.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
    	else if ($scope.selQuestion == "State of Health") {
    		d3.csv("/variables/stateOfHealth.csv", function(data){
				for (var i=0; i < data.length; i++) {
					if (data[i]["Country"] == geography.properties.name) {
						test = geography.properties.name;
						testList.push(data[i]);
					}
				}
				$scope.getChartData(testList);
				testList = [];
			})
    	}
		$scope.makeChart();
	}

	$scope.getChartData = function(testList) {
		$scope.data = [];


		angular.forEach(testList[0], function(value,key){
			if (key == "Country") {
				}
			else if( key == "Year") {

			}
			else {
				var object = {
				"key" : key,
				"color" : getRandomColor(),
				"values" : []
				}
				$scope.data.push(object);
			}
		});

		for (var k=0; k < $scope.data.length; k++) {
			for (var i=0;i<testList.length;i++){
				var smalObj = {
                        "label" : testList[i]["Year"] ,
                        "value" : parseInt(testList[i][$scope.data[k].key])
                 } 
				$scope.data[k].values.push(smalObj);	
			}
		}
				console.log($scope.data);

	}


	$scope.makeChart = function() {
		$scope.options = {
	        chart: {
	            type: 'multiBarHorizontalChart',
	            height: 450,
	            x: function(d){return d.label;},
	            y: function(d){return d.value;},
	            showControls: true,
	            showValues: true,
	            duration: 500,
	            xAxis: {
	                showMaxMin: false
	            },
	            yAxis: {
	                axisLabel: 'Percentage',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
	            }
	        },
	        title: {
		        enable: true,
		        text: selCountry + ': ' + $scope.selQuestion
			}
		}
	}

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	$scope.makeMap();

}]);