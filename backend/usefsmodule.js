const fs = require('fs');
const fs1 = require('fs').promises;

function dataWrite(){
    let statusmsg = "";
    try{
            fs.writeFileSync("studentdata.txt","Welcome to FS module in NODE");
            console.log("Data written successfully");
            statusmsg = "Data written successfully";
    }catch(err){
        console.log(err);
        statusmsg = "Error is" + err;
    }
    return statusmsg;
}
function dataRead(){
    let statusmsg = "";
    try{
        const fdata =fs.readFileSync("studentdata.txt",{encoding:"utf-8"});
        statusmsg = fdata;
    }
    catch(e){
        statusmsg = e;
    }
    return statusmsg;  
}
function deleteFile(){
    try{
        fs.unlinkSync("studentdata.txt");
        statusmsg = "File deleted successfully";
    }
    catch(e){
        statusmsg = e;
    }
}
async function readFileAsync(){
    let statusmsg = "";
    try{
        statusmsg = await fs1.readFile("student.json",{encoding:"utf-8"});
    }
    catch(e){
        statusmsg = e;
    }
    return statusmsg;  
}
const obj = {dataWrite,dataRead,deleteFile,readFileAsync}
module.exports = obj;