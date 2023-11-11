//-*-java-*-

//tp=top.page;
//tp.document=tp.document;
//if (tp.document.order!=undefined)
//    tp.document.order=tp.document.order;

// Note: versions of Javascript earlier than 1.3 do not have
// undefined, so we need a different way of knowing if the page has an
// order. What we'll do is define a variable here, give it a value in
// the order page, and check the value below.


function seeorder () {
    loc = '?table=order&'; 
    if (lang) loc += 'lang=' + lang + '&';
    //if (line) loc += 'line=' + line + '&';
    top.page.location = loc + 'service=show&company=' + company;
    window.location = loc + 'service=menu&company=' + company;
}
function update () {
    top.page.document.order.service.value='updateorder';
    top.page.document.order.submit ();
}
function cancel () {
    if (top.page.cancelconfirm ()) {
	loc = '?service=cancelorder&company=' + company;
	if (lang != '') loc += '&lang=' + lang;
	top.location=loc;
    }
}
function validate () {
    if (top.page.document.display.items.value == 0) {
	top.page.emptyalert ();
	return false;
    }
    if (top.page.document.order.customeremail.value.indexOf('@') < 1) {
	top.page.sendalert ();
	top.page.scrollTo (0,0);
	return false;
    }
    return true;
}
function send () {
    if (validate ()) {
	top.page.document.order.company.value=company;
	top.page.document.order.lang.value=lang;
	top.page.document.order.target='_top';
	top.page.document.order.submit ();
    }
}
function addtoorder () {
    top.page.document.addtoorder.submit();
}
function help () {
    top.page.scrollTo (0,0);
    top.page.togglevisibility('help');
}
function showcommentform () {
    top.page.scrollTo (0,0);
    top.page.togglevisibility('commentlayer');
}
function validatecommentform (cf,msg) {
    if (cf.email.value && cf.comment.value && cf.realname.value) {
	top.page.togglevisibility('commentlayer');
	return true;
    }
    else {
	alert (msg);
	return false;
    }
}
function fastorder () 
{
    if (top.isorderpage) {
	top.page.document.order.company.value=company;
	top.page.document.order.lang.value=lang;
	top.page.document.order.table.value="forder";
	top.page.document.order.target="_top";
	update ();
    }
    else {
	loc = '?company=' + company + '&'; 
	if (lang) loc += 'lang=' + lang + '&';
	top.page.location = loc + 'table=order&service=fast';
	window.location = loc + 'table=forder&service=menu';
    }
}
