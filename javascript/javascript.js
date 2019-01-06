var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
    animate(left,{opacity:50});
    animate(right,{opacity:50});
    clearInterval(timer);
};
    box.onmouseout = function(){
    animate(left,{opacity:0});
    animate(right,{opacity:0});
    timer = setInterval(next, 3000);
};
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
    (function(i){
        oNavlist[i].onclick = function(){
        index = i+1;
        navmove();
        animate(slider,{left:-800*index});
        }
    })(i);
    }
function next(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(slider,{left:-800*index},function(){
        if(index==7){
            slider.style.left = '-800px';
            index = 1;
        }
        isMoving = false;
        });
    }
    function prev(){
        if(isMoving){
            return;
        }
    isMoving = true;
    index--;
    navmove();
    animate(slider,{left:-800*index},function(){
        if(index==0){
            slider.style.left = '-4800px';
            index = 6;
            }
            isMoving = false;
            });
        }
    function navmove(){
        for( var i=0; i<oNavlist.length; i++ ){
            oNavlist[i].className = "";
            }
        if(index >6 ){
            oNavlist[0].className = "active";
        }else if(index<=0){
            oNavlist[5].className = "active";
        }else {
            oNavlist[index-1].className = "active";
            }
        }
        timer = setInterval(next, 3000);