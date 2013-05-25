Meteor.subscribe("resources");	
Resources = new Meteor.Collection("resources");

Template.events.recent = function () {
    return Resources.find();
};

Meteor.startup(function () {

	Resources.find().observe({
		added: function(resource, beforeIndex) {
			console.log(resource);
		}
	});

});
