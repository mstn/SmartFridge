Meteor.subscribe("resources");	
Meteor.subscribe("door");
Resources = new Meteor.Collection("resources");
Door = new Meteor.Collection("door");

var Sensor2Product = {
	'pot1': {
		name:"fridge_door",
		description:"Fridge door"
	},
	'pot0':{
		name:"milk",
		description:"Milk Plus"
	}
	
};

/* Template.page.events({
	'click #openBtn': function(){
		Door.remove({});
		Door.insert({status:'open'});
	},
	'click #closeBtn': function(){
		Door.remove({});
		Door.insert({status:'close'});		
	}
}); */

Template.page.homePage = function(){
    return false;
   // return Session.get('currentPage') === 'homePage';	
};
Template.page.productsPage = function(){
   return Session.get('currentPage') === 'productsPage';	
};
Template.page.settingsPage = function(){
   return Session.get('currentPage') === 'settingsPage';	
};
Template.page.logsPage = function(){
   return Session.get('currentPage') === 'logsPage';	
};

Template.page.getClass = function(item){
	return Session.get('currentPage')===item ? 'active' : '';
};

Template.page.t = function(sensor){
	return Sensor2Product[sensor] ? Sensor2Product[sensor].description : 'Unknown';
};

Template.page.prettyDate = function(time){
	return moment(parseInt(time)).fromNow();
};

Template.page.products = function(){
   return [ Resources.findOne({name:/pot0/}, {sort:[["time", "desc"]]}) ];
   /*return [
		{name:'prodotto 1', value:'bla bla'},
		{name:'prodotto 2', value:'bla bla'},
		{name:'prodotto 3', value:'bla bla'},
		{name:'prodotto 4', value:'bla bla'}
   ];*/	
};

Template.page.events = function () {
    return Resources.find({}, {sort:[["time", "desc"]]});
};

var Router = Backbone.Router.extend({
  routes: {
    "":"main", 
    "products":"products",
    "settings":"settings",
    "logs":"logs"
  },

  main: function() {
    Session.set('currentPage', 'homePage');
  },

  products: function() {
    Session.set('currentPage', 'productsPage');
  },

  logs: function(){
	Session.set('currentPage', 'logsPage');
  },

  settings: function(){
	Session.set('currentPage', 'settingsPage');
  }
});

var app = new Router;

Meteor.startup(function () {

	Resources.find().observe({
		added: function(resource, beforeIndex) {
			console.log(resource);
		}
	});
	
	Backbone.history.start({pushState: true});
	
	$('#openBtn').click( function(){
		
	});
	$('#closeBtn').click( function(){
			
	});	

});
