const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class started");
    setTimeout(() => {
      this.emit("bell", {
        period: "first",
        text: "period ended",
      });
    }, 1000);
  }
}

module.exports = School;
