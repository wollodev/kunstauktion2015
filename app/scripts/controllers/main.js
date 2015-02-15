'use strict';

/**
 * @ngdoc function
 * @name kunstauktion2015App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kunstauktion2015App
 */
angular.module('kunstauktion2015App')
  .controller('MainCtrl', function ($scope, Lightbox) {

    $scope.Lightbox = Lightbox;

    $scope.images = [
      'http://dummyimage.com/100x100/8ac4f6/ffffff.png',
      'http://dummyimage.com/200x200/29ed98/ffffff.png',
      'http://dummyimage.com/300x300/c47ee9/ffffff.png',
      'http://dummyimage.com/400x400/716e5c/ffffff.png',
      'http://dummyimage.com/500x500/b37752/ffffff.png',
      'http://dummyimage.com/600x600/20b7ea/ffffff.png',
      'http://dummyimage.com/700x700/586163/ffffff.png'
    ];

    $scope.linda = false;

    $scope.showArtist = function () {
      $scope.linda = !$scope.linda;
    };

  });
