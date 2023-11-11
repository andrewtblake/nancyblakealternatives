//-*-java-*-
function ok () {
    return confirm('Abandon the changes?');
}

function okdelete () {
    return confirm('Please confirm that you want to delete.');
}

function oklinedel () {
    return confirm ('Delete this line?');
}
function nodel () {
    alert ('First remove all products from this line.');
}
function nocdel () {
    alert ('First delete all lines from this (English) homepage.');
}


function okcompanydel () {
    return confirm ('Delete main page in this language?');
}
function nocdel () {
    alert ('First remove all product-lines from this page.');
}

function okproddel () {
    return confirm ('Delete this product?');
}

function okdelcompany () {
    return confirm ('Confirm delete page with all lines and products.');
}

function oktransfer () {
    return confirm ('Confirm transfer account to new owner.');
}

function nochange () {
    alert ('First make some changes to the information on this page, then click to save the changes.');
}

function noelement () {
    alert ('You have not yet created this element. Click "Apply changes" to create.');
}

function openhelp (subject) 
{
    unsethelpmode ();
    helpwindow=window.open ('/help-en.html?subject='+escape(subject),'helpwindow',
		 'innerHeight=200,innerWidth=200');
    helpwindow.focus ();
}


function newlinenotyet () {
    alert ('Before creating a new line (in English),\n' +
	   'you must first click "Apply Changes"\n' +
	   'to create this homepage.');
}

function newproductnotyet () {
    alert ('Before creating a new product (in English),\n' +
	   'you must first click "Apply Changes"\n' +
	   'to create this line.');
}

function demoalert () 
{
    alert ("Thank you for trying out the htw system.\n\n" +
	   "To save this site free of charge, please write your email" +
	   " address in the space on this page, and we " +
	   "will send you a temporary username and password.");
}

function demoexitok () 
{
    return confirm ("Did you give us your email address?\n\n" +
		    "If you write in your email address on the homepage " +
		    "your site will be saved so that you can continue to " +
		    "work on it later, or show it to friends.\n\n" +
		    "Do you wish to close anyway?");
}

tb_head_sections = 'Menu entries';
tb_head_pages = 'Pages';
tb_head_site = 'Site info';

tb_head_en = 'English text';
tb_head_es = 'Spanish text';
tb_head_it = 'Italian text';
