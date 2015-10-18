
var Events = require('docker-events');
var Docker = require('dockerode');
require('shelljs/global');

console.log("running weave daemon");
var emitter = new Events({
  docker: new Docker()
});

emitter.start();
emitter.on("start", function(message) {
  var containerId = message.id;

  console.log(messsage);

  console.log("container started");

  if (!which('weave')) {
    console.log('Cannot attach to weave network, weave not available');
    return;
  }

  console.log("attaching to weave");
  exec('weave attach ' + containerId);
});