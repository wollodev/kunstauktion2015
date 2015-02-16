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

    $scope.linda = false;

    $scope.showArtist = function () {
      $scope.linda = !$scope.linda;
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
            $scope.masterpieces.push($scope.summary.data.feed.entry[i]);
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

    //
    //$scope.masterpieces = [
    //  {
    //    'thumb': 'http://dummyimage.com/600x600/20b7ea/ffffff.png',
    //    'image': 'http://dummyimage.com/600x600/20b7ea/ffffff.png',
    //    'title': 'Dame am Abend',
    //    'year': '',
    //    'painter': 'Leonardo DaVinci',
    //    'origin': 'Deutschland',
    //    'size': '100x50 cm',
    //    'type': 'Acryl auf Leinwand',
    //    'id': '23-032',
    //    'start_price': '450',
    //    'painter_description':'Linda Hennemann - motivierende kreative Lehrerin - arbeitet nach dem Motto: Wenn wir beim Malen wieder spielen wie die Kinder und alles um uns herum vergessen, so ist das sehr gesund für Körper und Geist. Das Malen aus dem Unterbewussten macht den Menschen schöpferisch. Es erwärmt unser Herz und unsere Seele, baut Stress ab und setzt Selbstheilungskräfte in Gang.',
    //    'painter_website':'linda-dell-arte.de'
    //  }
    //];


  });
