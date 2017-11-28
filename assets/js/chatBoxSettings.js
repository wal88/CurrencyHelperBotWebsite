var fontSize = 16; // default font size 
var backgroundContrastOn = false;
var defaultBackground = '#F3F6FA';
var contrastBackground = '#1E1E1F';

// do once after document loads
document.addEventListener('DOMContentLoaded', 
function (){
	//change chatBox heading
	document.querySelector('.wc-header>span').innerHTML = 'Currency ChatBot';
	document.querySelector('.wc-header').style.backgroundColor = '#1E2E22';
	
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

function toggleBackgroundContrast() {
	if (!backgroundContrastOn) {
		document.getElementById('main').style.backgroundColor = contrastBackground;
		backgroundContrastOn = true;
	} else {
		document.getElementById('main').style.backgroundColor = defaultBackground;
		backgroundContrastOn = false;
	}
}