console.log('Loaded!');
var element=document.getElementById('contents');

element.innerHTML='Changed element';
var img=document.getElementById('dino');
var marginleft=0;
function moveRight(){
    
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function() {

var interval=setInterval(moveRight,100);}