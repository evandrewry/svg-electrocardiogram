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
    paths: new Array(5),
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
