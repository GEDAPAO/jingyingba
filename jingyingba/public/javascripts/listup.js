window.onload = function(){
	var className = document.querySelector(".className");
	var des = document.querySelector(".des");
	var price = document.querySelector(".price");
	var oldPrice = document.querySelector(".oldPrice");
	var pic = document.querySelector(".pic");
	var type = document.querySelector(".type");

	var btn = document.querySelector(".btn");
	btn.onclick = function(){
	var data = `className=${className.value}&des=${des.value}&price=${price.value}&oldPrice=${oldPrice.value}&pic=${pic.value}&type=${type.value}`
		AJax("POST","/class/classList",data,function(data){

			var data = JSON.parse(data);
			console.log(data)
		})
	}

}