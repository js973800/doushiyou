var servicesElement = document.querySelector("#services");
	var sDElement = document.querySelector("#s-d");
	
	servicesElement.addEventListener("click", function () {
	  sDElement.classList.toggle("show");
	});