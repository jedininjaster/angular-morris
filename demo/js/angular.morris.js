angular.module('morris', [])
.directive('morris', function () {
	return {
		restrict: 'A',
		scope: {
			morrisConfig: '=morris',
		},
		compile: function(){
			return{
				pre: function (scope, el, attr, ctrl) {

				},
				post: function(scope, el, attr, ctrl){
					
					scope.morrisConfig.element = el

					new Morris[scope.morrisConfig.type](scope.morrisConfig)
				}
			}
		}
	}
});