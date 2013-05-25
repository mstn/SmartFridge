SmartFridge
===========


Use our REST api to build a cool mobile app!

Resources are attuators or sensors.

Resources generate events.

Get all of the resource events:

    $ curl http://smartfridge.meteor.com/api/resources

Create a new event:

    $ curl -d '{"name": "Resource Name", "value":"off"}' http://smartfridge.meteor.com/api/resources

