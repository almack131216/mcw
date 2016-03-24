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

app.controller('homeCtrl', function($scope) {
  $scope.sections = ['dynamics','features']; //html files to load (top.html, etc)
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
});
app.controller('aboutCtrl', function($scope) {
  $scope.sections = ['features','dynamics']; //html files to load (top.html, etc)
  $scope.loadedSections = [$scope.sections[0]]; //loaded html files
});
app.controller('contactCtrl',function($scope,myFactory){
    $scope.data = myFactory.data;    
    $scope.meta_title = $scope.data['meta_title'];
});


app.controller('block_1Ctrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDir = $scope.data['imgDir-csc'];
    $scope.imgDirThumb = $scope.data['imgDirThumb-csc'];
    $scope.imgDirLarge = $scope.data['imgDirLarge-csc'];
    $scope.title = 'This Week';
    
    $http.get('./app/js/php/popData.php?ctrlSQL=block_1Ctrl')
		.success(function(data) {            
			$scope.photos = data;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);

app.controller('block_2Ctrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
    $scope.title = 'Videos';   
    
    $http.get('./app/js/php/popData.php?ctrlSQL=block_2Ctrl')
		.success(function(data) {            
			$scope.videos = data;
			//$scope.videoFeatured = data[0];
            //$scope.videoFeatured_img = data[0]['image_large'];
            //alert('success: ' + $scope.videoFeatured.image_large);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);

app.controller('block_3Ctrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
    $scope.data = myFactory.data;        
    $scope.imgDir = $scope.data['imgDir-csc'];
    $scope.imgDirThumb = $scope.data['imgDirThumb-csc'];
    $scope.imgDirLarge = $scope.data['imgDirLarge-csc'];
    $scope.title = 'For Sale';   
    
    $http.get('./app/js/php/popData.php?ctrlSQL=block_3Ctrl')
		.success(function(data) {            
			$scope.sales = data;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
    
}]);

//app.controller('portfolioCtrl', ['$scope', '$http', '$log', 'myFactory', function($scope, $http, $log, myFactory) {
//$scope.title = 'Portfolio';
//    
//}]);

app.controller('portfolioListCtrl', ['$scope', '$sce', '$rootScope', '$http', '$log', 'myFactory', '$stateParams', function($scope, $sce, $rootScope, $http, $log, myFactory, $stateParams) {
    $scope.data = myFactory.data;
    $scope.meta_title = "Restoration Portfolio";
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
    $scope.categoryID = 6;
    $scope.title = "Restoration Portfolio";
    $scope.message = "<p>Here is a small selection of work carried out by us. Whether it be accident repairs, minor paintwork improvements, vehicle modifications or body restoration, we have the experience and expertise.</p>";
    $scope.itemParent = "portfolio";
    
    $http.get('./app/js/php/popData.php?ctrlSQL=portfolioCtrl')
		.success(function(data) {            
			$scope.products = data;
            $scope.title = "Restoration Portfolio " + $scope.products.length;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})


    $scope.sanitizeURL = function(getString){
        return getString.replace(/\s+/g, '-').toLowerCase();//$sce.URL(getString);
    }
}]);

app.controller('staffListCtrl', ['$scope', '$rootScope', '$http', '$log', 'myFactory', function($scope, $rootScope, $http, $log, myFactory) {
    $scope.data = myFactory.data;
    $scope.meta_title = "Meet the Staff";
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
    $scope.categoryID = 8;
    $scope.title = "Meet the Staff";
    $scope.itemParent = "staff";
    //$scope.message = "<p></p>";
    
    $http.get('./app/js/php/popData.php?ctrlSQL=staffCtrl')
		.success(function(data) {            
			$scope.products = data;
            //alert('success: ' + data);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})


    $scope.sanitizeURL = function(getString){
        return getString.replace(/\s+/g, '-').toLowerCase();//$sce.URL(getString);
    }
}]);

    
    

app.controller('itemDetailsCtrl', ['$scope', '$sce', '$rootScope', '$http', '$log', 'myFactory', '$stateParams', function($scope, $sce, $rootScope, $http, $log, myFactory, $stateParams) {
    
//$scope.id = $stateParams.id;
//$scope.product = $filter('filter')($scope.products, $stateParams.id)[0];
    $scope.data = myFactory.data;
    $scope.imgDir = $scope.data['imgDir'];
    $scope.imgDirThumb = $scope.data['imgDirThumb'];
    $scope.imgDirLarge = $scope.data['imgDirLarge'];
//    $scope.itemParent = "portfolio";
//    $scope.params = $stateParams;


    $http.get('./app/js/php/popData.php?ctrlSQL=itemDetailsCtrl&itemID=' + $stateParams.id)
		.success(function(data) {            
			$scope.product = data;
            $scope.productParent = data[0];
            $rootScope.itemName = data[0]['name'];
            $scope.itemParent = 'portfolio';
            $rootScope.itemParent = 'portfolio';
            $scope.xName = 'myName';
            $rootScope.xName = 'myName2';
            //alert('success: ' + data[0]);
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
		})
}]);

app.controller('contactCtrl', ['$scope', '$rootScope', '$http', '$log', 'myFactory', '$stateParams', function($scope, $rootScope, $http, $log, myFactory, $stateParams) {
    
//$scope.id = $stateParams.id;
//$scope.product = $filter('filter')($scope.products, $stateParams.id)[0];
    if($stateParams.id){
        $http.get('./app/js/php/popData.php?ctrlSQL=itemPreviewCtrl&itemID=' + $stateParams.id)
            .success(function(data) {            
                $scope.product = data[0];
                $rootScope.itemName = data[0]['name'];
                //alert('success: ' + data[0]);
            })
            .error(function(err) {
                //alert('error' + data);
                $log.error(err);
            })
    }
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