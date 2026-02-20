const http=require('http');
const PORT=4004;
const apidata=require('./apicalling')
const {dataWrite,dataRead,deleteFile,readFileAsync} =require('./usefsmodule')
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
else if(req.url=="/dataWrite" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata= dataWrite();
res.end(JSON.stringify({msg:jsondata}))

}

else if(req.url=="/dataRead" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata= dataRead();
res.end(JSON.stringify({msg:jsondata}))

}

else if(req.url=="/deleteFile" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata= deleteFile();
res.end(JSON.stringify({msg:jsondata}))

}


else if(req.url=="/readFileAsync" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata= await readFileAsync();
res.end(JSON.stringify({msg:jsondata}))

}
else if(req.url=="/register" && req.method=="POST"){
    let arr = [];
    let body = "";
    req.on('data',(chunk)=>{
        body+=chunk;
    })
    req.on('end',()=>{
        const {name,email,password} = JSON.parse(body);
        console.log(name)
        res.setHeader("Content-Type","application/json");
    })
res.end(JSON.stringify({msg:"Student registered successfully"}))

}

})

server.listen(PORT,()=>{
    console.log("Server is listening on "+PORT)
})