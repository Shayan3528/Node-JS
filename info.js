const EventEmitter = require("events");

class Info extends EventEmitter {
  information() {
    console.log(`Person Information`);
    setTimeout(() => {
      this.emit("info", {
        name: "Shayan",
        country: "BD",
      });
    }, 2000);
  }
}

module.exports = Info;
