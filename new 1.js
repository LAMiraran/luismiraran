	/* script function for my clock */
	function updateClock(){
			var now = new Date();
			var dname = now.getDay(),
				mo = now.getMonth(),
				dnum = now.getDate(),
				yr = now.getFullYear(),
				hou = now.getHours(),
				min = now.getMinutes(),
				sec = now.getSeconds(),
				pe = "AM";

				if(hou >= 12){
					pe = "PM";
				}
				if(hou == 0){
					hou = 12;
				}
				if(hou > 12){
					hou = hou - 12;
				}

				Number.prototype.pad = function(digits){
					for(var n = this.toString(); n.length < digits; n = 0 + n);
					return n;
				}

				var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
				var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
				var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
				for(var i = 0; i < ids.length; i++)
					document.getElementById(ids[i]).firstChild.nodeValue = values[i];
				}

			function initClock(){
				updateClock();
				window.setInterval("updateClock()", 1);
			}
	
	/* script function for my validation in login*/
	var attempt = 3; 
	function validate(){
	var uname = document.getElementById("uname").value;
	var password = document.getElementById("password").value;
	if ( uname == "IIT406" && password == "LETRAN"){
	alert ("Login successfully");
	window.location = "https://lamiraran.github.io/luismiraran/Carousel.html"; 
	return false;
	}
	else{
	attempt --;
	alert("You have left "+attempt+" attempt;");
	if( attempt == 0){
	document.getElementById("uname").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submitbutton").disabled = true;
	return false;
	}
	}
	}
	
