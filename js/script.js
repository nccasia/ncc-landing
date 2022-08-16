
	var menuIcon = document.querySelector(".navbar_menu")
	var smallMenu = document.querySelector(".small_menu")

	menuIcon.onclick = function () {
		smallMenu.classList.toggle("menu2");
	}

	function openSidebar() {
		document.getElementById("sidebar").style.display = "block";
	}

	function closeSidebar() {
		document.getElementById("sidebar").style.display = "none";
	}

	

	
	
	