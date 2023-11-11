//-*-java-*-
function ok () {
    return confirm('¿Abandonar los cambios?');
}

function okdelete () {
    return confirm('Favor de confirmar eliminación.');
}

function oklinedel () {
    return confirm ('¿Eliminar esta línea?');
}
function nodel () {
    alert ('Es necesario primero quitar todos los productos de la línea.');
}
function nocdel () {
    alert ('Es necesario primero eliminar todos las líneas de la página inicial (en Español).');
}

function okcompanydel () {
    return confirm ('¿Eliminar página inicial en este idioma?');
}
function nocdel () {
    alert ('Es necesario primero quitar todas las líneas de esta página.');
}

function okproddel () {
    return confirm ('¿Eliminar este producto?');
}

function okdelcompany () {
    return confirm ('Confirmar eliminar toda la página, con todos sus líneas y productos.');
}

function oktransfer () {
    return confirm ('Confirmar transferir cuenta a nuevo dueño.');
}

function nochange () {
    alert ('Es necesario primero hacer cambios a la información de esta página,' +
	   ' luego se hace clic en el botón "Aplicar cambios" para guardarlos.');
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
    alert ('Antes de crear una nueva línea (en Español),\n' +
	   'es necesario hacer clic en "Aplicar cambios"\n' + 
	   'para crear la página inicial.');
}

function newproductnotyet () {
    alert ('Antes de crear un nuevo producto (en Español),\n' +
	   'es necesario hacer clic en "Aplicar cambios"\n' + 
	   'para crear esta línea.');
}

function demoalert () 
{
    alert ("Gracias por probar el sistema htw.\n\n" +
	   "Para guardar este sitio sin costo alguno, por favor escriba su dirección " +
	   "de correo electrónico en esta página, " +
	   "y nosotros le enviaremos un nombre de usuario y" +
	   " contraseña temporales.");
}

function demoexitok () 
{
    return confirm ("¿Ha proporcionado su dirección de correo electrónico?\n\n" +
		    "Al dejar su correo en la página principal, hará " +
		    "que su sitio sea disponible más tarde, para poder seguirlo " +
		    "trabajando, o enseñarlo a amigos.\n\n" +
		    "¿Quiere cerrar de todas formas?");
}
