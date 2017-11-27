var fontSize = 16; // default font size 

// do once after document loads
document.addEventListener('DOMContentLoaded', 
function (){
	//change chatBox heading
	document.querySelector('.wc-header>span').innerHTML = 'Currency ChatBot';


	// check for changes of DOM Inside chat Box only
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	
	var observer = new MutationObserver(function(mutations) {
	  changeSize();
	});
	observer.observe(document.getElementById('chatBot'), {
		subtree: true,
	  childList: true
	});
}, false);


function decreaseTextSize() {
	fontSize -= 1;
	changeSize();
}
function increaseTextSize() {
	fontSize += 1;
	changeSize();
}
function changeSize() {
	userTexts = document.getElementsByClassName('format-plain');
	for (let text of userTexts) {
		text.style.fontSize = fontSize + 'px';
	}
	botTexts = document.getElementsByClassName('format-markdown');
	for (let text of botTexts) {
		text.style.fontSize = fontSize + 'px';
	}
}



// Observe a specific DOM element:
function mutationObserverCallback(mutations) {
	
	console.log('changeSize');
}