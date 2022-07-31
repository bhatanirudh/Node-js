const http= require('http'); /// this is module

const port=8000;   ///port is just a logical defination for a function/funtionality

const fs= require('fs'); // fs is file system module

function requestHandler(req,res){    // handles reuest and respose;
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    
    let filepath;

    switch(req.url){
        case '/':
            filepath='./index.html'
            break;
        case '/login':
            filepath='./login.html'
            break;
        default:
            filepath='./404.html'
    }

 fs.readFile(filepath,function(err,data){
    if(err){
        console.log('error',err);
    }

    return res.end(data);   
 })


    // res.end('<h1>Gotcha</h1>');  // rendering as html
}


const server= http.createServer(requestHandler);

server.listen(port,function(err){       // establishes connection from port
if(err){
console.log(err);
}

console.log("Server running on port:",port);
});