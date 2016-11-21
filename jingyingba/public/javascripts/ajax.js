function AJax(type,url,parm,callback){
	if(type === "GET"){
		var xhr = new XMLHttpRequest();
		xhr.open(type,url);
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				//doSometing
				var data = xhr.responseText;
				
				callback(data);
			}
		}
	}else{
		var xhr = new XMLHttpRequest();
		xhr.open(type,url);

		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");


		xhr.send(parm);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				//doSometing
				var data = xhr.responseText;
				
				callback(data);
			}
		}	
	}	
}