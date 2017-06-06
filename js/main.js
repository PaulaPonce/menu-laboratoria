var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", addMenu);

function addMenu(){
	var menu = document.getElementById("menu");
	menu.classList.remove("hidden");
}