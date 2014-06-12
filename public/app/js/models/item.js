(function () {
    'use strict';

    angular.module('models')
        .factory('ItemModel', function($q, $http) {

            var methods = {
                all: function() {
                    var d = $q.defer();

                    $http.get(apiURL + '/items')
                        .success(function(response) {
                            d.resolve(response);
                        })
                        .error(function(error) {
                            d.reject(error);
                        });

                    return d.promise;
                },
                get: function($id) {
                    var d = $q.defer();

                    $http.get(apiURL + '/items/' + $id)
                        .success(function(response) {
                            d.resolve(response);
                        })
                        .error(function(error) {
                            d.reject(error);
                        });

                    return d.promise;
                },
                new: function($data) {
                    var d = $q.defer();

                    $http.post(apiURL + '/items/', $data)
                        .success(function(response) {
                            d.resolve(response);
                        })
                        .error(function(error) {
                            d.reject(error);
                        });

                    return d.promise;
                },
                update: function($id, $data) {
                    var d = $q.defer();

                    $http.put(apiURL + '/items/' + $id, $data)
                        .success(function(response) {
                            d.resolve(response);
                        })
                        .error(function(error) {
                            d.reject(error);
                        });

                    return d.promise;
                },
                delete: function($id) {
                    var d = $q.defer();

                    $http.delete(apiURL + '/items/' + $id)
                        .success(function(response) {
                            d.resolve(response);
                        })
                        .error(function(error) {
                            d.reject(error);
                        });

                    return d.promise;
                }
            };

            return methods;
        });
})();
