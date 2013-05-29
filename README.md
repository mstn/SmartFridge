SmartFridge
===========


Use our REST api to build a cool mobile app!

Resources are attuators or sensors.

Resources generate a data stream from which events are extracted through proxy.js*. Our API processes those events.

Get all of the resource events:

    $ curl http://smartfridge.meteor.com/api/resources

Create a new event:

    $ curl -d '{"name": "Resource Name", "value":"off"}' http://smartfridge.meteor.com/api/resources

* this proxy.js which is been provided is designed for OpenPicus, standard web project with demo web server. If you use different hardware, please change proxy.js accordingly.
