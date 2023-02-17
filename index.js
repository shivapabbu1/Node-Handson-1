const http =require("http")

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write("Welcome to Home page");
        // res.send("<h1>Hello home</h1>")
        res.end();
    }
    else if( req.method === 'GET' && req.url==="/about"){
        
        res.write(JSON.stringify([9,1,3,3,1,2,2,0]));
        res.end();
        
    }
    else if( req.method==='GET'&&req.url=== "/contact"){
        res.write("Welcome to Contact page")
        res.end();
    }



}).listen(8080);




    