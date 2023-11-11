//-*-java-*-
function ok () {
    return confirm('�Abandonar los cambios?');
}

function okdelete () {
    return confirm('Favor de confirmar eliminaci�n.');
}

function oklinedel () {
    return confirm ('�Eliminar esta l�nea?');
}
function nodel () {
    alert ('Es necesario primero quitar todos los productos de la l�nea.');
}
function nocdel () {
    alert ('Es necesario primero eliminar todos las l�neas de la p�gina inicial (en Espa�ol).');
}

function okcompanydel () {
    return confirm ('�Eliminar p�gina inicial en este idioma?');
}
function nocdel () {
    alert ('Es necesario primero quitar todas las l�neas de esta p�gina.');
}

function okproddel () {
    return confirm ('�Eliminar este producto?');
}

function okdelcompany () {
    return confirm ('Confirmar eliminar toda la p�gina, con todos sus l�neas y productos.');
}

function oktransfer () {
    return confirm ('Confirmar transferir cuenta a nuevo due�o.');
}

function nochange () {
    alert ('Es necesario primero hacer cambios a la informaci�n de esta p�gina,' +
	   ' luego se hace clic en el bot�n "Aplicar cambios" para guardarlos.');
}

function noelement () {
    alert ('Es necesario primero hacer clic en "Aplicar cambios" para crear este elemento');
}

function openhelp (subject) 
{
    unsethelpmode ();
    helpwindow=window.open ('/help-es.html?subject='+escape(subject),'helpwindow',
		 'innerHeight=200,innerWidth=200');
    helpwindow.focus ();
}


function newlinenotyet () {
    alert ('Antes de crear una nueva l�nea (en Espa�ol),\n' +
	   'es necesario hacer clic en "Aplicar cambios"\n' + 
	   'para crear la p�gina inicial.');
}

function newproductnotyet () {
    alert ('Antes de crear un nuevo producto (en Espa�ol),\n' +
	   'es necesario hacer clic en "Aplicar cambios"\n' + 
	   'para crear esta l�nea.');
}

function demoalert () 
{
    alert ("Gracias por probar el sistema htw.\n\n" +
	   "Para guardar este sitio sin costo alguno, por favor escriba su direcci�n " +
	   "de correo electr�nico en esta p�gina, " +
	   "y nosotros le enviaremos un nombre de usuario y" +
	   " contrase�a temporales.");
}

function demoexitok () 
{
    return confirm ("�Ha proporcionado su direcci�n de correo electr�nico?\n\n" +
		    "Al dejar su correo en la p�gina principal, har� " +
		    "que su sitio sea disponible m�s tarde, para poder seguirlo " +
		    "trabajando, o ense�arlo a amigos.\n\n" +
		    "�Quiere cerrar de todas formas?");
}
