
//Add initial event listeners to the previous and next navigation buttons
document.getElementsByClassName("navigation__prev")[0].addEventListener("click", prevClicked);

document.getElementsByClassName("navigation__next")[0].addEventListener("click", nextClicked);

//function to execute when previous element clicked
function prevClicked(){
	let next = document.getElementsByClassName("navigation__next")[0];
	let prev = document.getElementsByClassName("navigation__prev")[0];
	let active = document.getElementsByClassName("navigation__active")[0];

	//Remove all active animations
	prev.style.animation = null;
	active.style.animation = null;
	next.style.animation = null;

	//Remove active Event Listeners
	next.removeEventListener("click", nextClicked);
	prev.removeEventListener("click", prevClicked);
	//Adjust Classes
	next.classList.toggle("navigation__next");
	next.classList.toggle("navigation__prev");
	
	prev.classList.toggle("navigation__prev");
	prev.classList.toggle("navigation__active");
	
	active.classList.toggle("navigation__active");
    active.classList.toggle("navigation__next");
	
	//Adjust Event Listeners
	next.addEventListener("click", prevClicked);
	active.addEventListener("click", nextClicked);
	//Adjust Aniations 
	prev.style.animation = "nav_prevToActive .66s ease-in-out";
	active.style.animation = "nav_activeToNext .66s ease-in-out";
	next.style.animation = "nav_nextToPrev .66s ease-in-out";
	
}

function nextClicked(){
	let next = document.getElementsByClassName("navigation__next")[0];
	let prev = document.getElementsByClassName("navigation__prev")[0];
	let active = document.getElementsByClassName("navigation__active")[0];

	prev.style.animation = null;
	active.style.animation = null;
	next.style.animation = null;

	//remove all event listeners
	prev.removeEventListener("click", prevClicked);
	next.removeEventListener("click", nextClicked);
	//Adjust Classes
	next.classList.toggle("navigation__next");
	next.classList.toggle("navigation__active");
	
	prev.classList.toggle("navigation__prev");
	prev.classList.toggle("navigation__next");
	
	active.classList.toggle("navigation__active");
  active.classList.toggle("navigation__prev");

	//Adjust Event Listeners
	prev.addEventListener("click", nextClicked);
	active.addEventListener("click", prevClicked);
	
	prev.style.animation = "nav_prevToNext .66s ease-in-out";
	active.style.animation = "nav_activeToPrev .66s ease-in-out";
	next.style.animation = "nav_nextToActive .66s ease-in-out";
}