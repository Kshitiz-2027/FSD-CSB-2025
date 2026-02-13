const http=require('http');
const PORT=4005;
const apidata=require('./apicalling')
const server=http.createServer(async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credential',true);
// res.setHeader('Content-Type','application/json');
// res.end("<h2 style=color:red>Welcome to Node Server</h2>");
if(req.url=="/msg" && req.method=="GET"){
   res.setHeader("Content-Type","text/html");
   res.end("<h2>Greeting of the day!!!</h2>") 
}
else if(req.url=="/data" && req.method=="POST"){
res.setHeader("Content-Type","application/json");
const jsondata={
    name:"rahul",
    branch:"CS",
    college:"ABES Engineering College"
}
res.end(JSON.stringify({msg:jsondata}))

}
else if(req.url=="/data" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata=await apidata(20,200);
res.end(JSON.stringify({msg:jsondata}))

}

else{
res.setHeader("Content-Type","text/html");
   res.end("<h2 style=color:red>Invalid request</h2>") 

}

})

server.listen(PORT,()=>{
    console.log("Server is listening on "+PORT)
})