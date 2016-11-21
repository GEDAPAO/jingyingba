/**
 * Created by lanou on 16/11/19.
 */
var ul=document.querySelector(".swiper .swipern");
var ull=document.querySelector(".swiper")
var zhuzi=document.querySelectorAll(".zhuzi li");
var prv=document.querySelector(".prv")
var xia=document.querySelector(".nextn")
var xiaoshi=document.querySelector(".right .login");
var xianshi=document.querySelector(".right .photo");
var timer=null;
var index=0;
var timer1=null;
for(var i=0;i<zhuzi.length;i++){
    zhuzi[i].index=i;
    zhuzi[i].onmouseover=function () {
        clearInterval(timer)
        for (var i=0;i<zhuzi.length;i++){
            zhuzi[i].id="";
        }
        index=this.index;
        zhuzi[this.index].id="taken";
        ul.style.marginLeft=-[this.index]*1232+"px";
    }
    zhuzi[i].onmouseout=function () {
        timer=setInterval(fn,2000);
    }
}
function fn() {
    index++;
    if(index>zhuzi.length-1){
        index=0
    }
    for (var i=0;i<zhuzi.length;i++){
        zhuzi[i].id="";
    }
    zhuzi[index].id="taken";
    ul.style.marginLeft=-[index]*1232+"px";
}
timer=setInterval(fn,2000);

ul.onmouseover=function () {
    clearInterval(timer);
    prv.style.display="block";
    xia.style.display="block";
}
ul.onmouseout=function () {
    timer=setInterval(fn,2000);
    prv.style.display="none";
    xia.style.display="none";
}
prv.onmouseover=function () {
    clearInterval(timer);
    prv.style.display="block";
    xia.style.display="block";
}
xia.onmouseover=function () {
    clearInterval(timer);
    prv.style.display="block";
    xia.style.display="block";
}

prv.onclick=function () {
    fnn()
}
xia.onclick=function () {
    fn()
}
function fnn() {
    index--;
    if(index<0){
        index=zhuzi.length-1
    }
    for (var i=0;i<zhuzi.length;i++){
        zhuzi[i].id="";
    }
    zhuzi[index].id="taken";
    ul.style.marginLeft=-[index]*1232+"px";
}



var ccc=document.querySelectorAll(".ccc a")
var sanjiao=document.querySelectorAll(".ccc span")
for (var i=0;i<ccc.length;i++){
    ccc[i].index=i;
    ccc[i].onclick=function () {
       for (var i=0;i<ccc.length;i++){
           sanjiao[i].style.display='none';
           ccc[i].style.backgroundColor="";
       }
        sanjiao[this.index].style.display="block";
        ccc[this.index].style.backgroundColor="#fafafa";
    }
}

if(document.cookie.indexOf('islogoin') == -1){
    xiaoshi.style.display="block";
    xianshi.style.display="none";
}

var gaoshan=document.querySelectorAll(".livecourse_right_tle a")
for (var i=0;i<gaoshan.length;i++){
    gaoshan[i].index=i;
    gaoshan[i].onclick=function () {
        for (var i=0;i<gaoshan.length;i++){
            gaoshan[i].id='';
        }
        gaoshan[this.index].id="xiaoyou";
    }
}
