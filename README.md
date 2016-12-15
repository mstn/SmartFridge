SmartFridge
===========


Use our REST api to build a cool mobile app!

Resources are attuators or sensors.

Resources generate a data stream from which events are extracted through proxy.js. Our API processes those events.

Get all of the resource events:

    $ curl http://localhost:3000/api/resources

Create a new event:

    $ curl -d '{"name": "Resource Name", "value":"off"}' http://smartfridge.meteor.com/api/resources

N.B.  proxy.js provided here is designed for OpenPicus, compiled with firmware standard web project with demo web server. If you use different hardware, or different firmware, please change proxy.js accordingly. Anyway, please update the IP/DNS addresses provided to the ones which fit your needs.

## About

This code was written for [an IoT hackathon](https://www.create-net.org/it/event/il-primo-iot-hackathon-trento) in 2013. We won the [first prize](https://www.create-net.org/it/news/report-first-iot-hackathon-event-trento). A live demo is [here](https://www.youtube.com/watch?v=1RzGV9ZnVSs). If interested, Lorenzo should still have the cardboard box we used pretending it was a fridge.
