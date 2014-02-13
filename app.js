angular.module('ekg', ['ng'])

.directive('strokeExposeLength', function () {
  return {
    scope: true,
    link: function (scope, elem, attr) {
      scope.strokeLength = elem[0].getTotalLength();
    }
  };
})

.controller('EkgCtrl', function () {
  return {
    paths: new Array(20),
    inverse5: function (n) {
      return 1 / Math.pow(n, 5)
    }
  };
})

.directive('ekg', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'ekg.html',
    controller: 'EkgCtrl as ekg'
  };
});
