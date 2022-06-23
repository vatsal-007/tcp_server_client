const http = require('http');
const fs = require('fs');

let request = http.get("http:localhost:3000/world.mp4",res =>{
    if(res.statusCode != 200){
        console.error(`Did not get an OK from server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }

    //image
    const writer = fs.createWriteStream('./outputvid.mp4');
    res.pipe(writer);

    res.on('close',()=>{
        console.log('Retrieved video as outputvid.mp4');
    });
});
request.on('error',(err) => {
    console.error(`Encountered an error trying to make a request : ${err.message}`);
});