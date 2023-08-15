var display = document.querySelector(".display")
		var button = document.querySelectorAll(".center");
		const spacialChars = ["%", "*", "-", "+", "="];
		let output = "";
		var noOfButton=document.querySelectorAll(".center").length;

		function calculate(btnValue){
			if(btnValue === "=" && output !== ""){
				output = eval(output.replace("%","/100"));
			}
			else if(btnValue === "ac"){
				output = "";
			}
			else if (btnValue === "del"){
				output = output.toString().slice(0,-1);
			}
			else{
				if (output === "" && spacialChars.includes(btnValue)){return;}
				output += btnValue
			}
			display.innerHTML = output;
		};

		button.forEach((button) => {
			button.addEventListener("click", e => calculate(e.target.dataset.value));
		})

		// for (var i=0;i<noOfButton;i++){
		// 	document.querySelectorAll(".center")[i].addEventListener("click",function name() {
		// 		addAnimation(this.classList[0]);
		// 		// view(this.classList[0]);
		// 		calculate(this.target.dataset.value);
		// 	})
		// }

		// function addAnimation(key){
		// 	var button=document.querySelector("."+key);
		// 	button.classList.add("pressed");

		// 	setTimeout(function(){
		// 		button.classList.remove("pressed");
		// 	},100);
		// }

		// function view(key){
		// 	var button=document.querySelector("."+key);
		// 	if(button.innerHTML == "="){
		// 		ans=
		// 		document.querySelector(".displayDown").innerHTML=perseFloat(ans);
		// 	}
		// 	else{
		// 	document.querySelector(".displayDown")
		// 	document.querySelector(".displayTop").innerHTML+= button.innerHTML;
		// }
		// }
		
