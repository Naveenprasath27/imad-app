var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var eclipse={
'about-lunareclipse':{
    
    heading:'lunar eclipse',
    link:'home',
    content:"<p> Lunar eclipses occur when Earth's shadow blocks the sun's light, which otherwise reflects off the moon. There are three types — total, partial and penumbral — with the most dramatic being a total lunar eclipse, in which Earth's shadow completely covers the moon.</p>"
    
    
},
'about-solareclipse':{
    heading:'solar eclipse',
    link:'home',
    content:`<p> A solar eclipse is a type of eclipse that occurs when the Moon passes between the Sun and Earth, and when the Moon fully or partially blocks ("occults") the Sun</p>`
    }
    
};
 function createtemplate (data){
 
 var content=data.content;
 var title=data.title;
 var link=data.link;
 var heading=data.heading;
 
 
 
 
 var htmltemplate=`
<!DOCTYPE html>
<head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>

       
         <link href="/ui/style.css" rel="stylesheet" />

</head>



<body>
    <div class="contains">
        <div>
        <a href='/'>${link}</a>
        <br>
        <hr/>
        </div>
        <h2>${heading}</h2>
        <br>
    
    
        
    ${content}
        
    
   
    
    </div>
    
    
</body>
</html>
 `;
 return htmltemplate;
}














app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:aboutName', function (req, res) {
    var aboutName=req.params.aboutName;
  res.send(createtemplate(eclipse[aboutName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port =80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
