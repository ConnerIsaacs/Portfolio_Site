
//Add initial event listeners to the previous and next navigation buttons
document.getElementsByClassName("navigation__prev")[0].addEventListener("click", prevClicked);

document.getElementsByClassName("navigation__next")[0].addEventListener("click", nextClicked);

//function to execute when previous element clicked
function prevClicked(){
	let next = document.getElementsByClassName("navigation__next")[0];
	let prev = document.getElementsByClassName("navigation__prev")[0];
	let active = document.getElementsByClassName("navigation__active")[0];
    let prevMain = document.getElementsByClassName("prevMain")[0];
	let currentMain = document.getElementsByClassName("currentMain")[0];
	let nextMain = document.getElementsByClassName("nextMain")[0];
	//Remove all active animations
	prev.style.animation = null;
	active.style.animation = null;
	next.style.animation = null;
    prevMain.style.animation = null;
	currentMain.style.animation = null;
	nextMain.style.animation = null;
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
    
    nextMain.classList.toggle("nextMain");
	nextMain.classList.toggle("prevMain");
	
	prevMain.classList.toggle("prevMain");
	prevMain.classList.toggle("currentMain");
	
	currentMain.classList.toggle("currentMain");
	currentMain.classList.toggle("nextMain");
	//Adjust Event Listeners
	next.addEventListener("click", prevClicked);
	active.addEventListener("click", nextClicked);
	//Adjust Aniations 
	prev.style.animation = "nav_prevToActive .66s ease-in-out";
	active.style.animation = "nav_activeToNext .66s ease-in-out";
	next.style.animation = "nav_nextToPrev .66s ease-in-out";
	
	prevMain.style.animation = "main_prevToActive .66s ease-in-out";
	currentMain.style.animation = "main_activeToNext .66s ease-in-out";
	nextMain.style.animation = "main_nextToPrev .66s ease-in-out";
	
	prevMain.style.transition = "background .66s .33s";
}

function nextClicked(){
	let next = document.getElementsByClassName("navigation__next")[0];
	let prev = document.getElementsByClassName("navigation__prev")[0];
	let active = document.getElementsByClassName("navigation__active")[0];
    let prevMain = document.getElementsByClassName("prevMain")[0];
	let currentMain = document.getElementsByClassName("currentMain")[0];
	let nextMain = document.getElementsByClassName("nextMain")[0];
	
	prev.style.animation = null;
	active.style.animation = null;
	next.style.animation = null;
    prevMain.style.animation = null;
	currentMain.style.animation = null;
	nextMain.style.animation = null;
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

    nextMain.classList.toggle("nextMain");
    nextMain.classList.toggle("currentMain");
    
    prevMain.classList.toggle("prevMain");
    prevMain.classList.toggle("nextMain");
    
    currentMain.classList.toggle("currentMain");
    currentMain.classList.toggle("prevMain");
  
	//Adjust Event Listeners
	prev.addEventListener("click", nextClicked);
	active.addEventListener("click", prevClicked);
	
	prev.style.animation = "nav_prevToNext .66s ease-in-out";
	active.style.animation = "nav_activeToPrev .66s ease-in-out";
    next.style.animation = "nav_nextToActive .66s ease-in-out";
    
    prevMain.style.animation = "main_prevToNext .66s ease-in-out";
	currentMain.style.animation = "main_activeToPrev .66s ease-in-out";
	nextMain.style.animation = "main_nextToActive .66s ease-in-out";
	nextMain.style.transition = "background .66s .33s";
}