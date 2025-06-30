const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("bellring",({period,name})=>{
    console.log(`We need to run because ${period} ended. ${name} `);
})

setTimeout(()=>{
    emitter.emit("bellring",{
        period:"2nd Period",
        name:"shimulkandi college",
    });
},3000);


