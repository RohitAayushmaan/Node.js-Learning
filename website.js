const fs=require('fs');
// const {Console}=require('console');
const http=require('http');
const port=process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
    console.log(req.url)
    
    res.statusCode=200;
    res.setHeader('Content-type','text/html')
    if(req.url=='/')
    {
        res.statusCode=200;
        res.end('<h1>This is webSite Example</h1>');
    }
    else if(req.url=='/about')
    {
        // res.rohit();
        res.statusCode=200;
        res.end('<h1>This is About module</h1>');
    }
    else if(req.url=='/home')
    {
        
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{

        res.statusCode=404;
        res.end('<h1>This Page not found</h1>');

    }
    
});

server.listen(port,()=>{
    console.log('Server is listening on port no: '+port);
});