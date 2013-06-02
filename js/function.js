function element(id)
{
return document.getElementById(id);
}

element("roomline").onclick = showpostboxbuttons;
element("items").onclick = hidepostboxbuttons;
element("postActivity").onclick = addtoItems;
element("choosefile").onclick = openfile;
element("myfile").onchange = modifychoosefile;


function showpostboxbuttons()
{
element("postboxbuttons").style.display="block";
}

function hidepostboxbuttons()
{
element("postboxbuttons").style.display="none";
}

var itemk=0;
function addtoItems()
{
var items = element("items");
var content = element("roomline").value;
var amount = element("amount").value;
var newcontent = '<ul id="item'+itemk+'"><li class="avatar"><img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></img></li><li class="item">'+content; 
if(content == "") return false;
if(amount != "") newcontent = newcontent +'  <b>'+amount+'$</b></li></ul>';
else newcontent= newcontent + '</li></ul>';
items.innerHTML = newcontent + items.innerHTML;
element("roomline").value = "";
element("amount").value ="";
itemk--;
}

function openfile()
{
eventFire(element("myfile"),"click");
}

function modifychoosefile()
{
element("choosefile").innerHTML="Attached";
}

function eventFire(el, etype){
  if (el.fireEvent) {
    (el.fireEvent('on' + etype));
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}