let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

	menu.classlist.toggle('fa-times');
	navbar.classlist.toggle('active');
}

window.onscroll = () =>{

	menu.classlist.remove('fa-times');
	navbar.classlist.remove('active');

	if(window.scrolly > 60){
		document.querySelector('#scroll-top').classList.add('active');
	}else{
		document.querySelector('#scroll-top').classList.remove('active');
	}
}

function loader(){
	document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
	setInterval(loader, 3000);
}

window.onload = fadeOut();
