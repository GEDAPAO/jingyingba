window.onload = function(){
	var name = document.querySelector(".boxn #textc");
	var password = document.querySelector(".boxn #texts");
	var passwordn = document.querySelector(".boxn #textj");
	var btn = document.querySelector(".monad .dji");
	var ip=document.querySelector(".dji input")
	var tips = document.querySelector(".monad p");
	var wzj=document.querySelectorAll(".formn .text")
	var wzjn=document.querySelectorAll(".formn .boxn")
	btn.onclick = function(){
		var tip = "";
		if(!name.value || !password.value || !passwordn.value){
			tip = "密码，手机号码不能为空"
			tips.innerHTML = tip;
			return;
		}
		if(!ze.test(name.value)){
			tip="输入手机号码不正确"
			tips.innerHTML = tip;
			return;
		}
		if(password.value!==passwordn.value){
			tip="输入密码不准确"
			tips.innerHTML = tip;
			return;
		}else{
			tip=""
			tips.innerHTML = tip;
		}
		var data = `username=${name.value}&password=${password.value}&passwordn=${passwordn}`
		AJax("POST","/reg",data,function(data){

		})
	}
	for(var i=0;i<wzj.length;i++){
		wzj[i].index=i;
		wzj[i].onblur=function () {
			if(wzj[this.index].value==""){
				wzjn[this.index].style.border="1px solid red";
			}
			if(wzj[this.index].value){
				wzjn[this.index].style.border="";
				ip.style.backgroundColor="#fb6c03";
			}
		}
	}
	var ze=/^1(3\d|5[012356789]|8[03456789])\d{8}$/;
	name.onclick=function () {
		if(!ze.test(name.value)){
			wzjn[0].style.border="1px solid red";
		}else {
			wzjn[0].style.border="";
		}
	}
}

var login=document.querySelector(".reg .dd");
var reg=document.querySelector(".logreg_box .zz");
var ll=document.querySelector(".mwidth .logreg_box");
var cc=document.querySelector(".mwidth .reg");
login.onclick=function () {
	ll.style.display='block';
	cc.style.display="none";
}
reg.onclick=function () {
	ll.style.display='none';
	cc.style.display="block";
}
var xianshi=document.querySelector(".right .photo");
var xiaoshi=document.querySelector(".right .login");
if(document.cookie.indexOf('islogoin') == -1){
	xiaoshi.style.display="block";
	xianshi.style.display="none";
}