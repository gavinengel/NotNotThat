'use strict';

/* Services */

var NotNotServices = angular.module('NotNotServices', []);

NotNotServices.factory('storageService', function(){
    return {
      get: function (key) {
        return JSON.parse(localStorage.getItem(key) || '[]');
      },

      set: function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
      }
    };
  });
