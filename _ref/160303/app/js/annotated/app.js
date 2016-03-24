var app = angular.module('myApp', []);

app.factory('myFactory', function(){   
    var data = [];   
    data['str_company_name'] = 'Malton Coachworks';
    data['str_company_strapline'] = 'Accident Repair | Classic Car Restoration';
    data['str_company_message'] = '<p>Malton Coachworks is a wholly-owned subsidiary of Classic & Sportscar Ltd. Established in 1991, the Company has earned a national reputation as purveyors of high quality Classic, Vintage, and Collector\'s cars.</p>';
    data['str_company_address'] = 'Showfield Lane Industrial Estate, Malton, North Yorkshire';
    data['str_company_postcode'] = 'YO17 6BT';
    data['str_company_country'] = 'UK';
    data['str_company_telephone'] = '01653 692090';
    data['str_company_email'] = 'sales@maltoncoachworks.co.uk';
    data['str_company_web'] = 'www.maltoncoachworks.co.uk';
    
    data['meta_title'] = data['str_company_name'];
    data['meta_description'] = data['str_company_message'];
    data['meta_keywords'] = "malton coachworks, classic car restoration, accident repair, scratch repair, yorkshire";
    data['meta_author'] = "amactive.net &copy;2016";
        
    
	data['imgDir'] = 'http://www.classicandsportscar.ltd.uk/images_catalogue/';
    data['imgDirThumb'] = data['imgDir'] + 'thumbs/';
    data['imgDirLarge'] = data['imgDir'] + 'large/';

	data['imgDir'] = 'app/img-cms/';
	data['imgDirThumb'] = 'app/img-cms/thumbs/';
	data['imgDirLarge'] = 'app/img-cms/large/';
    
    return {
        data: data
    };
});

