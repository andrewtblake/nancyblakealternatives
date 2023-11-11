// a couple of globals just to simplify coding

// this will hold the page's form 
form='';

// this will be the table: company, line or product
table='';

// this tells if the user is trying a demo
var demouser = false;

// a kludge to make addtabs be ok even if we don't load tabbar.js
var addtabs = new Function;


function amdirty() 
{
  return dirty;
}

function plausible_email (email) 
{
  dot =  email.lastIndexOf ('.');
  at = email.indexOf ('@');
  len = email.length;
    
  return (dot > 4 && at > 1 && dot - 2 > at && len - 2 > dot);
}

function demoexit () 
{
  if (
      demouser && 
      (table != "company" || !plausible_email(form.email.defaultValue)) 
      && 
      !demoexitok ()
      ) 
    return false;
  else return true;
}

function endsession () 
{
  if (dirty && !ok()) return;
  if (!demoexit ()) return;
    
  loc = "?service=close&admin=" + code;
  + "&lang=" + lang;
  window.location = loc;
}

function superdir () 
{
  if (dirty && !ok()) return;
  loc = "?admin=" + code;
  + "&lang=" + lang;
  window.location = loc;
}

function apply () 
{
  if (!dirty) nochange();
  else {
    undisplay ('mainbuttons');
    //document.getElementById("mainbuttons").style.height="0";
    
    display ('wait');

    if (window.updateRTEs) updateRTEs ();

    if (top.suc) { 
      alert("blim"); suppress_unchanged_controls (); 
    }
	
    form.submit();
  }
}

function viewsite () 
{
  if (form.id.value == 'new') noelement (); //alert nothing to see
  else window.open ('?table=' + table + '&id=' + form.id.value +
		    '&lang=' + form.lang.value);
}

function files () 
{
  if (dirty && !ok()) return;
  loc = "?admin=" + code + "&service=files"
    + "&lang=" + lang;
  window.location = loc;
}


function comment () 
{
  togglevisibility ('commentform');
}


function helpbtn (helplayer) 
{
  // old function doesn't do anything
}

function menu (a, b) 
{
  //do nothing in edit pages
}


var helpmode=false;
function sethelpmode () 
{
  helpmode=true;
  eval (prestr + 'page' + poststr).cursor = 'help';
}
function unsethelpmode () 
{
  helpmode=false;
  eval (prestr + 'page' + poststr).cursor = 'default';
}

function genbtn (method,text,tooltip) 
{
  p = method.indexOf ("(");
  if (p > -1) helpkey = method.substr (0, p);
  else helpkey = method;
    
  action = 'if (helpmode) openhelp (\'' + helpkey + '\'); else ' + method;
    
  if (tooltip == 'disabled') 
    document.write ('<input type=button value="' + text + 
		    '" title="' + tooltip + '" disabled class=menubtn>');
  else
    document.write ('<input type=button onclick="' + action +
		    '" value="' + text + '" title="' + tooltip + 
		    '" class=menubtn>');
}

function imgbtn (method,img,tooltip) 
{
  p = method.indexOf ("(");
  if (p > -1) helpkey = method.substr (0, p);
  else helpkey = method;
    
  action = 'if (helpmode) openhelp (\'' + helpkey + '\'); else ' + method;
    
  if (tooltip == 'disabled') 
    document.write ('<button style=width:20px;margin=0 title="' + tooltip + '" disabled class=menubtn>' +
		    '<img src="' + img + '"></button>');
  else
    document.write ('<span style="width:20px;height:20px;margin=0;background-repeat:no-repeat;background-position:center;background-image:url(' + img + ')" onclick="' + action + '" title="' + tooltip + 
		    '" class=menubtn></span>');
  // 	document.write ('<input type=button onclick="' + action + '">');
}


function inputrow (help,label,tt) 
{
  document.writeln ('<tr><td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>' + label + ':');
  document.writeln ('<td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>');
}

function inputnrow (help,label,tt) // starts without <tr>
{
  document.writeln ('<td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>' + label + ':');
  document.writeln ('<td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>');
}

// help! kludges!
function inputtrow1 (help,label,tt) 
{
  // warning! inputrow1 opens a table that needs to be closed by hand
  document.writeln ('<tr><td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>' + label + ':');
  document.writeln ('<td><table cellspacing=0 cellpadding=0><tr><td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>');
}

function inputtrow2 (help,tt) 
{
  document.writeln ('<td valign=top  title="' + tt + '"onclick=if(helpmode)openhelp(\'' + help + '\')>');
}


/////////////////// MM_rubbish ////////////////////////////////////
// removed
