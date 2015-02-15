'use strict';

/**
 * @ngdoc overview
 * @name kunstauktion2015App
 * @description
 * # kunstauktion2015App
 *
 * Main module of the application.
 */
angular
  .module('kunstauktion2015App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTooltip',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (LightboxProvider) {
    // set a custom template
    LightboxProvider.templateUrl = 'views/lightbox-modal.html';

    // our images array is not in the default format, so we have to write this
    // custom method
    LightboxProvider.getImageUrl = function (imageUrl) {
      return imageUrl;
    };

    // set the caption of each image as its text color
    LightboxProvider.getImageCaption = function (imageUrl) {
      return '#' + imageUrl.match(/00\/(\w+)/)[1];
    };

    //// increase the maximum display height of the image
    //LightboxProvider.calculateImageDimensionLimits = function (dimensions) {
    //  return {
    //    'maxWidth': dimensions.windowWidth >= 768 ? // default
    //    dimensions.windowWidth - 92 :
    //    dimensions.windowWidth - 52,
    //    'maxHeight': 1600                           // custom
    //  };
    //};

    // the modal height calculation has to be changed since our custom template is
    // taller than the default template
    LightboxProvider.calculateModalDimensions = function (dimensions) {
      var width = Math.max(300, dimensions.imageDisplayWidth + 32);

      if (width >= dimensions.windowWidth - 20 || dimensions.windowWidth < 768) {
        width = 'auto';
      }

      return {
        'width': width,                             // default
        'height': 'auto'                            // custom
      };
    };
  });
