(function(){
  var app = angular.module('baseballSearch', []);
	'use strict';

	.controller('BaseballSearchController', ['$scope', '$log', function($scope, $log) {
		$scope.getResults = function(){
			$log.log("test");
			
			//get the Search data from the input
			var userInput = $scope.input_query;
			//fire the API request
			$http.post('/start', {"query": userInput}).
			  success(function(results){
				$log.log(results);
			  }).
			  error(function(error){
				$log.log(error);
			  });
		};
	}
	
  app.controller("BaseballController", function(){
	  this.products = searches;
  });

  app.controller("SearchController",function(){
	 this.search = {}; 
	 
	 this.searchDB = function(baseball){
		baseball.searches.push(this.search); 
		this.baseball = {};
	 };
  });
  
  var searches = [
  {
	  name: 'playerID',
	  year: 'yearID',
	  gameNum: 'gameNum',
	  gameID: 'gameID',
	  team: 'teamID',
	  lgID: 'lgID',
	  GP: 'GP',
	  startingPos: 'startingPos',
  },
  {
	year: 'yearID',
	team: 'teamID',
	lgID: 'lgID',
	player: 'playerID',
	G_all: 'G_all',
	GS: 'GS',
	G_batting: 'G_batting',
	G_defense: 'G_defense',
	G_p: 'G_p',
	G_c: 'G_c',
	G_1b: 'G_1b',
	G_2b: 'G_2b',
	G_3b: 'G_3b',
	G_ss: 'G_ss',
	G_lf: 'G_lf',
	G_cf: 'G_cf',
	G_rf: 'G_rf',
	G_of: 'G_of',
	G_dh: 'G_dh',
	G_ph: 'G_ph',
	G_pr: 'G_pr',  
  }
  
  ]
})();
