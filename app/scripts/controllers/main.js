'use strict';

/**
 * @ngdoc function
 * @name kunstauktion2015App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kunstauktion2015App
 */
angular.module('kunstauktion2015App')
  .controller('MainCtrl', function ($scope, Lightbox, $http) {

    $scope.Lightbox = Lightbox;

    $scope.showArtist = function (masterpiece) {

      masterpiece.isShown = !masterpiece.isShown;
    };

    $scope.openLightboxModal = function (index) {
      Lightbox.openModal([$scope.masterpieces[index]], index);
    };

    $scope.spreadsheet = '1Y4-fwBhPEISZvzPSg52rU1Xi6vhs5Pp7jN4YR_7PocI';
    $scope.getMasterpieces = function(spreadsheet){
      $http({
        url: 'https://spreadsheets.google.com/feeds/list/'+spreadsheet+'/od6/public/values?alt=json',
        method: 'GET'
      })
        .then(function(response) {
          // success
          $scope.summary = response;

          console.log('summary found');
          //load the unknown list with those returned.
          $scope.masterpieces = [];

          for (var i = 0; i < $scope.summary.data.feed.entry.length; i++) {
            var tmpMasterpiece = $scope.summary.data.feed.entry[i];
            tmpMasterpiece.isShown = false;
            $scope.masterpieces.push(tmpMasterpiece);
          }
          console.log($scope.masterpieces);
        },
        function(response) { // optional
          // failed
          console.log('spreadsheet not found with response ' + response);
        }
      );
    };

    $scope.getMasterpieces($scope.spreadsheet);

  });
