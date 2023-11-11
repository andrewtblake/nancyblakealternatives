//-*-java-*-

// handle links

// this is the alternative version
// which links to static files rather than by CGI calls

buttonbase='';


function switchlang (l) {

    // still problems here

    // we'll have to remember to change the below when we add new languages
    if (l > 2) alert ("New language");
    lc = (l==1 ? 'es':'en');

    
    loc = 'main-' + lc + '.html';
    top.location = loc;
}

function getline (l) {
    top.page.location = 'l' + l + '-' + langcode + '.html';
    // here the menu frame does not need to be updated because we never do orders
}

function getproduct (p) {
    window.location = 'p' + p + '-' + langcode + '.html';
}

function putshoppingcart (tooltip) 
{
    // erm, do nothing
}

function menuentry (name, link, counter, tooltip) 
{
    anch = '<a href="' + link + '"';
    
    hover = ' onMouseOut=document.btnx' + counter + '.src="' + buttonbase + 'gif"' 
	+ ' onMouseOver=document.btnx' + counter + '.src="' + buttonbase+'on.gif"';


    if (arguments.length > 3) 
	tt = ' alt="' + tooltip + '" title="' + tooltip + '"';
    else tt = '';

    me = '<tr><td>' + anch + hover + '>'
	+ '<img name=btnx' + counter + ' border=0 src="' + buttonbase + 'gif"'
	+ tt + '></a><td class=btntext' + tt + '>' 
	+ anch + ' class=btntext' + hover + '>' + name + '</a>';
    
    //alert (me);    
    document.write (me);
}

function menuentrynobtn (name, link, counter, tooltip) 
{
    anch = '<a href="' + link + '"';
    
    if (arguments.length > 3) 
	tt = ' alt="' + tooltip + '" title="' + tooltip + '"';
    else tt = '';

    me = '<tr><td class=btntext' + tt + '>' 
	+ anch + ' class=btntext' + '>' + name + '</a>';
    
    //alert (me);    
    document.write (me);
}

// handle images

// this is the alternative version
// which links to static files rather than making CGI calls
function myerr (me)
{
    if (arguments.length) alert (arguments [0]);
    else alert ('no args');
    
    //return true;
}

function genimg (id, table, type, alt)
{
    alt_text='';
    if (type=='thumb') t = 't';
    else if (type=='logo') t = 'l';
    else t = '';
    
    
    if (arguments.length > 3) alt_text = ' alt="' + alt + '" title="' + alt + '"';

    imgsrcbase = table.substr(0,1) + id + t;
    jim1 = new Image;
    
    jim1.src = imgsrcbase;// + '.jpg'; try with no extension at all
	// jim1.onerror=myerr(); bullshit
    
    
    document.write
	('<img class=' + type + ' src="' + imgsrcbase + '"' + alt_text + '>');
}

// note: what are we going to do about gif files?
 
function preload (table, id) 
{
    jim1 = new Image;
    jim1.src= table.substr(0,1) + id;    
}

////// always write this

document.write ('<link rel="stylesheet" href="style.css" type="text/css">');
