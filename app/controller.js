angular.module('ui-router-test.controller', [])


	.config(function($stateProvider) {
		$stateProvider
			.state('test', {
				url: '/:urlStateParam/test/:myState',
				templateUrl: 'app/test.tpl.html',
				controller: 'TestController as testCtrl'
			})
	})


	.controller('TestController', function testCtrl($stateParams) {
		var testCtrl = this;
		testCtrl.urlStateParam = $stateParams.urlStateParam;
		testCtrl.myState = $stateParams.myState;
	})

;
