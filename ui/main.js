console.log('Loaded!');
var img=document.getElementById('image'); 
var marginLeft=0;
function moveRight(){
  
    moveLeft=moveLeft+10;
    img.style.moveLeft= marginLeft + 'px';
img.onclick=function(){
    var interval = setInterval(moveRight,100);
 
};
}