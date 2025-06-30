
const School = require('./school');
const school = new School();

school.on("bell",({period,text})=>{
    console.log(`we need to run because ${period} ${text}`);

})


school.startPeriod();


