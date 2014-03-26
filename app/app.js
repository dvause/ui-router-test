angular.module('ui-router-test',
	[
		'ui.router',
		'ui-router-test.controller'
	]
)

	.config(function($urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('home', {
				url: '/'
			});
		$urlRouterProvider.otherwise('/');
	})

	.controller('AppController', function($scope, $state) {
		$scope.setPage = function(page) {
			$state.transitionTo(page);
		}
	})
;
