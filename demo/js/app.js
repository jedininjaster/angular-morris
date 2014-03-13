angular.module('angularMorrisDemo', ['morris']).run(['$rootScope',
	function($scope){

	console.log('running angular.morris')

	$scope.morrisConfig = {
		type: 'Line',
		data: [
		{ year: '2008', value: 20 },
		{ year: '2009', value: 10 },
		{ year: '2010', value: 5 },
		{ year: '2011', value: 5 },
		{ year: '2012', value: 20 }
		],
		xkey: 'year',
		ykeys: ['value'],
		labels: ['Value']
	}
	
	//TODO: add all chart examples
	//TODO: add watchers

}])