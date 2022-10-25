document.querySelector(".page1").addEventListener("click",function(){
	
	
	document.querySelector(".mainpage").setAttribute("style","display:none;");
	document.querySelector(".newpage1").setAttribute("style","display:block;");
	
	
	
	
})
document.querySelector(".calculator").addEventListener("click",function(){
	
	
	document.querySelector(".mainpage").setAttribute("style","display:none;");
	document.querySelector(".calculatorsection").setAttribute("style","display:block;");
	document.querySelector(".calculatorr").setAttribute("style","display:inline-block;");
	
	
	
	
})
document.querySelector(".backbtn").addEventListener("click",function(){
	
	
	document.querySelector(".mainpage").setAttribute("style","display:block;");
	document.querySelector(".newpage1").setAttribute("style","display:none;");
	
	
	
	
})
document.querySelector(".backbuttoncal").addEventListener("click",function(){
	
	
	document.querySelector(".mainpage").setAttribute("style","display:block;");
	document.querySelector(".calculatorsection").setAttribute("style","display:none;");
	
	
	
	
})
document.querySelector(".signinbtn").addEventListener("click",function(){
	var newpwd=document.querySelector(".password").value;
	var confirmpwd=document.querySelector(".cnfpassword").value;
	
	if(newpwd==confirmpwd){
		document.querySelector(".mainloginpage").setAttribute("style","display:none;")
		document.querySelector(".mainpage").setAttribute("style","display:block;")
		
	}
	else{document.querySelector(".loginpage p").innerHTML="তর পাসওয়আর্ড মোড়াইয়া জায়গা মত ভইরা দে";
	}
	
	
	
})


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
