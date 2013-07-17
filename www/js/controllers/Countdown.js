
function CountdownCtrl ($scope, $timeout, $filter, Remaining) {
  $scope.remaining = '';
  $scope.remainingMinutes = 0;
  $scope.today = new Date();

  $scope.onTimeout = function () {

    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    var seconds = Remaining.getSeconds($filter('date')(tomorrow, 'd MMMM, yyyy') + ' 00:00:00');
    $scope.remaining = Remaining.getString(seconds);

    var remaining = Remaining.getArray(seconds);
    if(remaining.length) {
      $scope.remainingMinutes = (remaining[0] * 60) + remaining[1];
    }

    $timeout($scope.onTimeout, 1000)
  };

  $scope.onTimeout();
}

CountdownCtrl.$inject = ['$scope', '$timeout', '$filter', 'Remaining'];