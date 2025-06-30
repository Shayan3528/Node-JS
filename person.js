
const Info = require("./info");

const person = new Info();

const personInfo = ({name,country})=>{
    
    console.log(`Name:${name}\nCountry:${country}`);

}

person.on("info",personInfo);

person.information();