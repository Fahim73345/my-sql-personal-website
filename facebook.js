document.querySelector(".page1").addEventListener("click",function(){
	
	
	document.querySelector(".mainpage").setAttribute("style","display:none;");
	document.querySelector(".newpage1").setAttribute("style","display:block;");
	
	
	
	
})
document.querySelector(".backbtn").addEventListener("click",function(){
	
	
	document.querySelector(".mainpage").setAttribute("style","display:block;");
	document.querySelector(".newpage1").setAttribute("style","display:none;");
	
	
	
	
})
document.querySelector(".signinbtn").addEventListener("click",function(){
	var newpwd=document.querySelector(".password").value;
	var confirmpwd=document.querySelector(".cnfpassword").value;
	
	if(newpwd==confirmpwd){
		document.querySelector(".mainloginpage").setAttribute("style","display:none;")
		document.querySelector(".mainpage").setAttribute("style","display:block;")
		
	}
	else{document.querySelector(".loginpage p").innerHTML="hi saon";
	}
	
	
	
})