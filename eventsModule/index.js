const EventEmitter = require("events");

const event = new EventEmitter();
event.on("sayHello", () => {
  console.log("hello this is your first event");
});

event.on("sayHello", () => {
  console.log("hello this is your second event");
});

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and page is ${msg}`);
});
event.emit("sayHello");
event.emit("checkPage", 200, "ok");
