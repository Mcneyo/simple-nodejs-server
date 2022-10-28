const express = require('express');
const app = express();
const path = require('path');
const router = express.router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/indexx.html'));
    // __dirname: it will resolve to your project folder
});
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/stylee.css'));
});

// add the router
app.use('/',router);
app.listen(process.env.port||3000);
console.log('running at port 3000');