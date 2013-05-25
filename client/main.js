Meteor.subscribe("resources");	
Resources = new Meteor.Collection("resources");

Template.page.homePage = function(){
   return Session.get('currentPage') === 'homePage';	
};
Template.page.productsPage = function(){
   return Session.get('currentPage') === 'productsPage';	
};
Template.page.logsPage = function(){
   return Session.get('currentPage') === 'logsPage';	
};

Template.page.getClass = function(item){
	return Session.get('currentPage')===item ? 'active' : '';
};

Template.page.products = function(){
   // TODO fare in base alla rete
   return [
		{name:'prodotto 1', value:'bla bla'},
		{name:'prodotto 2', value:'bla bla'},
		{name:'prodotto 3', value:'bla bla'},
		{name:'prodotto 4', value:'bla bla'}
   ];	
};

Template.events.recent = function () {
    return Resources.find();
};

var Router = Backbone.Router.extend({
  routes: {
    "":"main", 
    "products":"products",
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

});
