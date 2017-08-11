console.log('Loaded!');
var element=document.getElementById('contents');

element.innerHTML='Changed element';
var img=document.getElementById('dino');
function moveRight(){
    var marginLeft=0;
    img.style.marginLeft=marginLeft+'10px';
}

img.onclick=function() {

var interval=setInterval(moveRight,100);}