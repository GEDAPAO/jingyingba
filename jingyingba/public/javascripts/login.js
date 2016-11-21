window.onload = function(){
	var name=document.querySelector(".box .username")
	var password = document.querySelector(".box .password");
	var btn = document.querySelector(".login_box .dianji");
	var tips = document.querySelector(".login_box p");
	btn.onclick = function() {
		var tip = "";
		if (!name.value || !password.value) {
			tip = "密码，手机号不能为空"
			tips.innerHTML = tip;
			return;
		}

		var data = `username=${name.value}&password=${password.value}`
		AJax("POST", "/login", data,function (data) {
			var data = JSON.parse(data);
			if (data.success) {
				setCookie("islogoin",1,1)
				window.location.href = "http://127.0.0.1:3000/";
			}else{
				tips.innerHTML=data.info;
			}
		})
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

function setCookie(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
var xiaoshi=document.querySelector(".right .login");
var xianshi=document.querySelector(".right .photo");
if(document.cookie.indexOf('islogoin') == -1){
	xiaoshi.style.display="block";
	xianshi.style.display="none";
}





