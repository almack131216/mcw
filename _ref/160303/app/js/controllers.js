app.controller('headCtrl',function($scope,myFactory){
    $scope.data = myFactory.data;
    
    $scope.meta_title = $scope.data['meta_title'];
    $scope.meta_description = $scope.data['meta_description'];
    $scope.meta_keywords = $scope.data['meta_keywords'];
    $scope.meta_author = $scope.data['meta_author'];
    
    $scope.title = $scope.data['str_company_name'];
    $scope.message = $scope.data['str_company_message'];
});

app.controller('navCtrl',function($scope, $controller) {
    angular.extend(this, $controller('headCtrl', {$scope: $scope}));
});


app.controller('introCtrl',function($scope, $controller){
    angular.extend(this, $controller('headCtrl', {$scope: $scope}));
});



app.controller('thisWeekCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
    $scope.title = 'This Week';
    
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
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
    $scope.title = 'Videos';   
    
    $http.get('./app/js/popData.php?ctrlSQL=videosCtrl')
		.success(function(data) {            
			$scope.videos = data;
			$scope.videoFeatured = data[0];
            $scope.videoFeatured_img = data[0]['image_large'];
            $scope.videoFeatured_debug = 'rover-p4-100_27145.jpg';
            //alert('success: ' + $scope.videoFeatured.image_large);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);

app.controller('forSaleCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
    $scope.title = 'For Sale';   
    
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


app.controller('footerCtrl', ['$scope', 'myFactory', function($scope, myFactory) {
    $scope.data = myFactory.data;        
    $scope.company_name = $scope.data['str_company_name'];
    $scope.company_address = $scope.data['str_company_address'];
    $scope.company_email = $scope.data['str_company_email'];
    $scope.company_telephone = $scope.data['str_company_telephone'];
    $scope.company_web = $scope.data['str_company_web'];
    $scope.company_postcode = $scope.data['str_company_postcode'];    
}]);