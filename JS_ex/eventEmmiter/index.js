console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
const EventEmitter = require("events");

function createEmitter(onOpen, onClose) {    
  let eventEmmiter=new EventEmitter();
  eventEmmiter.on("open",onOpen);
  eventEmmiter.on("close",onClose);
  return eventEmmiter;

}

function opened(emitter) {
  emitter.emit("open");
  emitter.removeAllListeners("open");
}
function closed(emitter) {
  emitter.emit("close");
  emitter.removeAllListeners("close");

}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);