var app = angular.module('myApp', []);

app.factory('myFactory', function(){   
    var data = [];   
    data['str_company_name'] = 'Malton Coachworks';
    data['str_company_strapline'] = 'Accident Repair | Classic Car Restoration';
    data['str_company_message'] = '<p>Malton Coachworks is a wholly-owned subsidiary of Classic & Sportscar Ltd. Established in 1991, the Company has earned a national reputation as purveyors of high quality Classic, Vintage, and Collector\'s cars.</p>';
    
    data['meta_title'] = data['str_company_name'];
    data['meta_description'] = data['str_company_message'];
    data['meta_keywords'] = "malton coachworks, classic car restoration, accident repair, scratch repair, yorkshire";
    data['meta_author'] = "amactive.net &copy;2016";
        
    //data['imgDir'] = 'http://localhost/bestfoodhere.com/images_catalogue/';
	data['imgDir'] = 'http://www.bestfoodhere.com/images_catalogue/';
    data['imgDirThumb'] = data['imgDir'] + 'thumbs/';
    data['imgDirLarge'] = data['imgDir'] + 'large/';
    
    return {
        data: data
    };
});
app.controller('headCtrl',['$scope', 'myFactory', function($scope,myFactory){
    $scope.data = myFactory.data;
    
    $scope.meta_title = $scope.data['meta_title'];
    $scope.meta_description = $scope.data['meta_description'];
    $scope.meta_keywords = $scope.data['meta_keywords'];
    $scope.meta_author = $scope.data['meta_author'];
    
    $scope.title = $scope.data['str_company_name'];
    $scope.message = $scope.data['str_company_message'];
}]);

app.controller('navCtrl',['$scope', '$controller', function($scope, $controller) {
    angular.extend(this, $controller('headCtrl', {$scope: $scope}));
}]);


app.controller('introCtrl',['$scope', '$controller', function($scope, $controller){
    angular.extend(this, $controller('headCtrl', {$scope: $scope}));
}]);



app.controller('thisWeekCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
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

app.controller('videosCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
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

app.controller('forSaleCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
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