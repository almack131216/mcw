
myApp.controller('headCtrl',['$scope', 'myFactory', function($scope,myFactory){
    $scope.data = myFactory.data;
    
    $scope.meta_title = $scope.data['meta_title'];
    $scope.meta_description = $scope.data['meta_description'];
    $scope.meta_keywords = $scope.data['meta_keywords'];
    $scope.meta_author = $scope.data['meta_author'];
    
    $scope.title = $scope.data['str_company_name'];
    $scope.message = $scope.data['str_company_message'];
}]);

myApp.controller('navCtrl',['$scope', '$controller', function($scope, $controller) {
    angular.extend(this, $controller('headCtrl', {$scope: $scope}));
}]);


myApp.controller('introCtrl',['$scope', '$controller', function($scope, $controller){
    angular.extend(this, $controller('headCtrl', {$scope: $scope}));
}]);



myApp.controller('thisWeekCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.message = 'this week';
    
    $http.get('./app/js/popData.php?ctrlSQL=thisWeekCtrl')
		.success(function(data) {            
			$scope.photos = data;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);

myApp.controller('videosCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.message = 'videos';   
    
    $http.get('./app/js/popData.php?ctrlSQL=videosCtrl')
		.success(function(data) {            
			$scope.videos = data;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);

myApp.controller('forSaleCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.message = 'for sale';   
    
    $http.get('./app/js/popData.php?ctrlSQL=forSaleCtrl')
		.success(function(data) {            
			$scope.sales = data;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);
/* filters.js */

myApp.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});

// html filter (render text as html)
myApp.filter('html', ['$sce', function ($sce) { 
    return function (text) {
        return $sce.trustAsHtml(text);
    };    
}])
$(function() { 

    $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
		event.preventDefault();
		$('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
		$('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
		$('a[href="#toggle-search"]').closest('li').toggleClass('active');

		if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			/* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
			setTimeout(function() { 
				$('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
			}, 100);
		}			
	});

	$(document).on('keyup', function(event) {
		if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
			$('a[href="#toggle-search"]').trigger('click');
		}
	});
    
});