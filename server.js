var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages={
 'projects':{
    title: 'projects | bhargav sai',
    heading: 'projects',
    content: `<p class="bold center">-Text Steganography on differently spelt words.<p>
            <p class="bold center">-Total Gene & protien count in Large user data.</p>`
},
'about':{
    title: 'about | bhargav sai',
    heading: 'About Me',
    content: `   <p class="bold center">I am student who is pursuing b.tech and eagar learner and noob.<p>`
}
};

function createtemp(data){
    
var title = data.title;
var heading= data.heading;
var content= data.content;
var htmltemp=`
<!doctype html>
<html>
    <head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

   
    </head>
    
    <body>
        <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        <hr>
        <br>
        <div class="center text-big bold">
        ${heading}
    
        </div>
<div style="center">    
        
            
           ${content}

        
        
    </div> 
    <div class="center bold">
    <a href="/">Home</a>
    </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>

`;
return htmltemp;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:pagename', function(req, res) {
 var pagename=res.params.pagename;
 res.send(createtemp(pages[pagename]));
});
/*
app.get('/projects', function(req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'project.html'));
// res.send(createtemp(project));
});
app.get('/about', function(req, res) {
    // res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/test3', function(req, res) {
    res.send("Tested and working");
});
*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
