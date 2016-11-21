/**
 * Created by lanou on 16/11/17.
 */
var btn=document.querySelectorAll(".changtiao li");
var xianshi=document.querySelector(".right .photo");
var xiaoshi=document.querySelector(".right .login");
var tui=document.querySelector(".photo .tui")

for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onmouseover=function () {
        btn[this.index].style.transition="0.5s linear";
        btn[this.index].style.marginTop=-10+"px";
        btn[this.index].style.border="1px solid #fb6c03";
    }
    btn[i].onmouseout=function () {
        btn[this.index].style.transition="0.5s linear";
        btn[this.index].style.marginTop=0+"px";
        btn[this.index].style.border="";
    }
}

var next=document.querySelector(".hezuo .next");
var list=document.querySelector(".tup");
var timer=null;
next.onclick=function () {
    clearInterval(timer)
    var last=list.lastElementChild;
    left=-160;
    function fn1() {
        left++;
        list.style.marginLeft=left+"px";
        if (list.style.marginLeft==0+"px"){
            clearInterval(timer)
            list.insertBefore(last,list.firstElementChild);
            list.style.marginLeft=-160+"px";
        }
    }
    timer=setInterval(fn1,3);
}


var nextn=document.querySelector(".qiye .next2");
var listn=document.querySelector(".renren");
var timer2=null;
nextn.onclick=function () {
    clearInterval(timer2)
    var lastn=listn.lastElementChild;
    console.log(lastn)
    left=-160;
    function fn2() {
        left++;
        listn.style.marginLeft=left+"px";
        if (listn.style.marginLeft==0+"px"){
            clearInterval(timer2)
            listn.insertBefore(lastn,listn.firstElementChild);
            console.log(lastn)
            listn.style.marginLeft=-160+"px";
        }
    }
    timer2=setInterval(fn2,3);
}


if(document.cookie.indexOf('islogoin') !== -1){
    xiaoshi.style.display="none";
    xianshi.style.display="block";
}
if(document.cookie.indexOf('islogoin') == -1){
    xiaoshi.style.display="block";
    xianshi.style.display="none";
}
tui.onclick=function () {
    setCookie("islogoin",1,-1)
        xiaoshi.style.display="block";
        xianshi.style.display="none";
}
function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}




