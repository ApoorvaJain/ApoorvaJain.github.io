(function(){
	var members = [
		{
			id: 1,
			name: "Apoorva",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "developer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Developer<br />Discipline : Dev<br />Lead : Swarup<br />Manager : Dominic<br />Location : Hyderabad",
		},
		{
			id: 2,
			name: "Swarup",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "lead",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Lead<br />Discipline : Dev<br />Manager : Dominic<br />Location : Hyderabad",	
		},
		{
			id: 3,
			name: "Dominic",
			displayPicture: "something.src",
			discipline: "Management",
			designation: "manager",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: null,
				strength: 5
				},
				{
				name: "other teams",
				lead: null,
				manager: null,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Manager<br />Discipline : Management<br />Location : Hyderabad",	
		},
		{
			id: 4,
			name: "Sneha",
			displayPicture: "something.src",
			discipline: "QA",
			designation	: "quality assurance engineer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				},
				{
				name: "xyz",
				lead: 5,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Quality Assurance Engineer<br />Discipline : QA<br />Manager : Dominic<br />Location : Hyderabad",	
		},
		{
			id: 5,
			name: "Apoorva",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "developer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Developer<br />Discipline : Dev<br />Lead : Swarup<br />Manager : Dominic<br />Location : Hyderabad",
		},
		{
			id: 6,
			name: "Swarup",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "lead",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Lead<br />Discipline : Dev<br />Manager : Dominic<br />Location : Hyderabad",	
		},
		{
			id: 7,
			name: "Dominic",
			displayPicture: "something.src",
			discipline: "Management",
			designation: "manager",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: null,
				strength: 5
				},
				{
				name: "other teams",
				lead: null,
				manager: null,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Manager<br />Discipline : Management<br />Location : Hyderabad",	
		},
		{
			id: 8,
			name: "Sneha",
			displayPicture: "something.src",
			discipline: "QA",
			designation	: "quality assurance engineer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				},
				{
				name: "xyz",
				lead: 5,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Quality Assurance Engineer<br />Discipline : QA<br />Manager : Dominic<br />Location : Hyderabad",	
		},
		{
			id: 9,
			name: "Apoorva",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "developer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Developer<br />Discipline : Dev<br />Lead : Swarup<br />Manager : Dominic<br />Location : Hyderabad",
		},
		{
			id: 10,
			name: "Swarup",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "lead",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Lead<br />Discipline : Dev<br />Manager : Dominic<br />Location : Hyderabad",	
		},
		{
			id: 11,
			name: "Dominic",
			displayPicture: "something.src",
			discipline: "Management",
			designation: "manager",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: null,
				strength: 5
				},
				{
				name: "other teams",
				lead: null,
				manager: null,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Manager<br />Discipline : Management<br />Location : Hyderabad",	
		},
		{
			id: 12,
			name: "Sneha",
			displayPicture: "something.src",
			discipline: "QA",
			designation	: "quality assurance engineer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				},
				{
				name: "xyz",
				lead: 5,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "Team : Oasis_Automation<br />Designation : Quality Assurance Engineer<br />Discipline : QA<br />Manager : Dominic<br />Location : Hyderabad",	
		}
	];

  	var app = angular.module('teamViewer', ['ngMaterial','ngMdIcons', 'ngSanitize']);

  	
  	app.controller('TeamController', function($scope, $mdDialog, $mdMedia) {


    	$scope.members = members;
    	$scope.filter = {};

    	$scope.filterProperties = [];
    	
    	var filterProperty = {};
    	filterProperty.displayName = 'All';
    	filterProperty.actualName = 'all';
    	$scope.filterProperties.push(filterProperty);

    	$scope.filter.model = 'all';


    	var filterProperty = {};
    	filterProperty.displayName = 'Name';
    	filterProperty.actualName = 'name';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Discipline';
    	filterProperty.actualName = 'discipline';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Designation';
    	filterProperty.actualName = 'designation';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Location';
    	filterProperty.actualName = 'location';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Team';
    	filterProperty.actualName = 'teams';
    	$scope.filterProperties.push(filterProperty);

    	//groups functionality
    	$scope.groups = [];

    	var group = {};
    		group.title = "All";
    		group.members = $scope.members;

    	$scope.groups.push(group);

    	$scope.groupByProperty = function(){
    		var currentGroupingCriteria = $scope.filter.model;
    		
    		//create groups
    		$scope.groups = groupBy($scope.members, function(item) {
    		    return [ item[currentGroupingCriteria] ];
    		}, currentGroupingCriteria);
    	}

    	function arrayFromObject(obj) {
    	    var arr = [];
    	    for (var i in obj) {
    	        arr.push(obj[i]);
    	    }
    	    return arr;
    	}

    	function groupBy(list, fn, currentGroupingCriteria) {
    	    var groups = {};
    	    if(currentGroupingCriteria == "teams"){

    	    	for(var i=0; i<list.length; i++){
    	    		for(var j=0; j < list[i][currentGroupingCriteria].length; j++){

    	    			var group = JSON.stringify( fn(list[i])[0][j].name );

    	    			if (group in groups) {
    	    			    groups[group].members.push( list[i] );
    	    			} 

    	    			else{
    	    				groups[group] = {};
    	    				groups[group].title = list[i][currentGroupingCriteria][j].name;
    	    				groups[group].members = [ list[i] ];
    	    			}
    	    		}
    	    	}
    	    	
    	    }

    	    else if(currentGroupingCriteria == "all"){
    	    	$scope.groups = [];

    	    	var group = "all";
    	    		
    	    		groups[group] = {};
    	    	    groups[group].members = $scope.members;
    	    	    groups[group].title = "All";
    	    }

    	    else{
	    	    for (var i = 0; i < list.length; i++) {

	    	        var group = JSON.stringify(fn(list[i]));

	    	        if (group in groups) {
	    	            groups[group].members.push( list[i] );
	    	        } 

	    	        else {
	    	        	groups[group] = {};

	    	            groups[group].members = [ list[i] ];
	    	            groups[group].title = list[i][currentGroupingCriteria];
	    	        }
	    	    }
	    	}

    	    return arrayFromObject(groups);
    	}

    	/* For Dialogue box - change template to templateUrl */
    	
  		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


		$scope.showAdvanced = function(ev, member, members) {
		  	var memberLead = '';
		  	var memberManager = ''; 
		  	var noLead = false; 
		  	var noManager = false; 
		  	for ( var index = 0; index < members.length; index++){
		  		if( member.teams[0].lead != null){
			  		if( members[index].id == member.teams[0].lead ){
			  			memberLead = members[index].name;
			  		}
		  		}else{
		  			noLead = true; 
		  		}
		  		if( member.teams[0].manager != null){
		  			if(members[index].id == member.teams[0].manager ){
		  				memberManager = members[index].name;
		  			}
		  		}else{
		  			noManager = true;
		  		}
		  		if((memberLead != '' && memberManager != '') || (noLead && noManager) || (memberLead != '' && noManager) || ( memberManager != '' && noLead)){
		  			break;
		  		}
		  	}
		    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		    $mdDialog.show({
		     	controller: DialogController,
		    	template: "<md-dialog ng-cloak><md-toolbar class='md-hue-1'><div class='md-toolbar-tools'><h2>"+member.name+"</h2><span flex></span><md-button class='md-icon-button' ng-click='cancel()' ><span class='md-title'>X<span></md-icon></md-button></div></md-toolbar><md-dialog-content><div class='md-dialog-content'><div class=''><img class='dialogue-img' alt='Member Image' src='http://worldartsme.com/images/business-person-clipart-1.jpg'></div><div class='chip-space'><md-chips><md-chip>"+member.designation+"</md-chip><md-chip>"+member.discipline+"</md-chip><md-chip>"+member.teams[0].name+"</md-chip></md-chips></div><div class=''><p>Team : "+member.teams[0].name+"</p><p>Designation : "+member.designation+"</p><p>Discipline : "+member.discipline+"</p><p data-ng-hide='"+noLead+"'>Lead : "+memberLead+"</p><p data-ng-hide='"+noManager+"'>Manager : "+memberManager+"</p><p>Location : "+member.location+"</p></div></div></md-dialog-content></md-dialog>",
		    	parent: angular.element(document.body),
		     	targetEvent: ev,
		     	clickOutsideToClose:true,
		    	fullscreen: useFullScreen
		    });
		    $scope.$watch(function() {
		     	return $mdMedia('xs') || $mdMedia('sm');
		    }, function(wantsFullScreen) {
		   	    $scope.customFullscreen = (wantsFullScreen === true);
		    });
 	 };

  	});

	app.config(function($mdThemingProvider) {
	  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
	    'contrastDefaultColor': 'light',
	    'contrastDarkColors': ['50'],
	    '50': 'ffffff',
	    '100': '1a237e'
	  });

	  $mdThemingProvider.definePalette('customBlue', customBlueMap);
	  $mdThemingProvider.theme('default')
	    .primaryPalette('customBlue', {
	      'default': '50',
	      'hue-1': '100'
	    }).accentPalette('pink');
	  $mdThemingProvider.theme('input', 'default').primaryPalette('grey')
	});


	function DialogController($scope, $mdDialog) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
	}


})();
