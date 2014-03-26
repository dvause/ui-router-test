describe("Controller: ui-router-test.controller", function() {
	var testCtrl;
	var stateParams;
	var scope;
	var httpBackend;

	beforeEach(module("ui-router-test.controller", "ui.router"));
	beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
		stateParams = {urlStateParam: 'foo', myState: 'bar'};
		httpBackend = _$httpBackend_;
		scope = $rootScope.$new();
		testCtrl = $controller("TestController", {$scope: scope, $stateParams: stateParams});
	}));

	describe("TestCtrl", function() {
		it("should have an urlStateParam", function() {
			expect(testCtrl.urlStateParam).toBe("foo");
		})
	})
});