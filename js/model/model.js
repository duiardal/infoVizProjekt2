d3Test.factory('Model', function ($resource, $rootScope) {

	var countryList = [];
	
	this.readfile = function(){
		d3.csv("/variables/importanceInLifeReligion.csv", function(data){
			$rootScope.importanceReligion = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Importance in life: Religion"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very important"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.importanceReligion.push(testObject);
		//console.log($rootScope.importanceReligion);
		});

		d3.csv("/variables/importanceInLifeFamily.csv", function(data){
			$rootScope.importanceFamily = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Importance in life: Family"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very important"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.importanceFamily.push(testObject);
		//console.log($rootScope.importanceReligion);
		});

		d3.csv("/variables/importanceInLifeFriends.csv", function(data){
			$rootScope.importanceFriends = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Importance in life: Friends"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very important"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.importanceFriends.push(testObject);
		//console.log($rootScope.importanceReligion);
		});

		d3.csv("/variables/importanceInLifeLeisure.csv", function(data){
			$rootScope.importanceLeisure = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Importance in life: Leisure"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very important"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.importanceLeisure.push(testObject);
		//console.log($rootScope.importanceReligion);
		});
		d3.csv("/variables/importanceInLifePolitics.csv", function(data){
			$rootScope.importancePolitics = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Importance in life: Politics"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very important"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.importancePolitics.push(testObject);
		//console.log($rootScope.importanceReligion);
		});

		d3.csv("/variables/importanceInLifeWork.csv", function(data){
			$rootScope.importanceWork = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Importance in life: Work"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very important"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.importanceWork.push(testObject);
		//console.log($rootScope.importanceReligion);
		});

		d3.csv("/variables/feelingOfHappiness.csv", function(data){
			$rootScope.feelingOfHappiness = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["Feeling of Happiness"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very happy"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}

			testObject[obj["Year"]].push(obj);

			}
		
		startPart["Questions"].push(testObject);
		$rootScope.feelingOfHappiness.push(testObject);
		//console.log($rootScope.importanceReligion);
		});

		d3.csv("/variables/stateOfHealth.csv", function(data){
			$rootScope.stateOfHealth = [];
			var testObject = {};
			var startPart = {};
			startPart["Questions"] = ["State of Health"];
			testObject["1994-1999"] = [];
			testObject["2000-2004"] = [];
			testObject["2005-2009"] = [];
			testObject["2010-2014"] = [];

			for (var k=0; k < data.length; k++) {
				var obj = {};
				obj["Country"] = data[k]["Country"];
				obj["Value"] = data[k]["Very good"];
				obj["Year"] = data[k]["Year"];

				var countries = Datamap.prototype.worldTopo.objects.world.geometries;

				for (var i = 0; i < countries.length; i++) {
					var datamapName = countries[i];
					if (data[k]["Country"] == datamapName.properties.name) {
						obj["ISO"] = datamapName.id;
					}
				}
			testObject[obj["Year"]].push(obj);
			}
			
		startPart["Questions"].push(testObject);
		$rootScope.stateOfHealth.push(testObject);
		//console.log($rootScope.importanceReligion);
		});
	}

	this.returnCountryList = function() {
		return countryList;
	}


return this;

})