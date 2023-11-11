var netscapeDOM = (document.layers) ? true : false;
var microsoftDOM = (document.all) ? true : false;
var geckoDOM = (document.getElementById && microsoftDOM != true) ? true : false;
	
if(geckoDOM) { netscapeDOM = false; microsoftDOM = false; }

if (microsoftDOM) { 
	
  hidestr = "hidden";
  showstr = "visible";
  prestr = "document.all.";
  poststr = ".style";
}
else if (netscapeDOM) { 

  hidestr = "hide";
  showstr = "show";
  prestr = "document.layers.";
  poststr = "";
		
}
else if (geckoDOM) {
	
  hidestr = "hidden";
  showstr = "visible";
  prestr = "document.getElementById('";
  poststr = "').style";	
	
}

function show (layer) {
  eval(prestr + layer + poststr).visibility = showstr;
}
function hide (layer) {
  eval(prestr + layer + poststr).visibility = hidestr;
}


function display (layer) {
  eval(prestr + layer + poststr).display = "block";
}
function undisplay (layer) {
  eval(prestr + layer + poststr).display = "none";
}

var currentlyvisible = '';
function togglevisibility (layer) {
  if (currentlyvisible != '') hide (currentlyvisible);
  if (currentlyvisible != layer) {
    currentlyvisible = layer;
    if (currentlyvisible != '')
      eval(prestr + currentlyvisible + poststr).visibility = showstr;
  }
  else { 
    currentlyvisible = '';
  }
}

function makevisible (layer) {
  if (currentlyvisible != layer) {
    eval(prestr + currentlyvisible + poststr).visibility = hidestr;
    currentlyvisible = layer;
    eval(prestr + currentlyvisible + poststr).visibility = showstr;
  }
}

function testvisibility(msg) {
  alert ('htw-visibility.js is loaded: ' + msg);
}

