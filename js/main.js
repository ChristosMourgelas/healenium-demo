console.log("main.js is loaded");

//CSS Hover
//XPath Hover
//    <a:hover>
var test = document.getElementById("change_id");
    test.addEventListener("mouseenter", function( event ) {
      // highlight the mouseenter target
      event.target.name="hover";

      setTimeout(function() {
          event.target.name="hover";
        }, 3000);
      },true);

//window.addEventListener("load", function(event){
//    var main=document.getElementById("main_form")
//    setTimeout(function(){
//        var div = document.createElement('div');
//        div.className="wrap-input1 validate-input";
//
//        main.appendChild(div)
//        var field=document.createElement("input");
//        field.className="input1";
//        field.id="change_wait";
//
//        div.appendChild(field);
//    }, 8000);
//},true);

function showValidate() {
console.log("showValidate() was called");

var bodyClassName=document.getElementsByClassName("healenium")[0];
    bodyClassName.className="healenium1";

//CSS Id - change_id -> newValue
//Find element by Id
    var idField=document.getElementById("change_id");
    idField.id="newValue";
    idField.name="return name";
	idField.className="newClass";

//CSS ClassName - test_class -> newClass
//Find element by classname
//XPath Not Contains className 'input1'
//XPath Contains className 'test'
//XPath Following-Sibling
//XPath Starts-with 'test'
//XPath Ancestor::
    var classNameField=document.getElementById("change_className");
    classNameField.className="newClass";

//CSS LastChild
    var lastField=document.getElementById("change_element_last_child");
    lastField.outerHTML = lastField.outerHTML.replace(/child_tag/g,"input");

//Find element by linktext
//Find element by partialLinkText
    var linksField = document.getElementById("change_links");
        linksField.href = "https://ec.europa.eu/eurostat/web/main/news";
        linksField.innerText = "Eurostat News";
 }

 //<!--===============================================================================================-->
 //Conditional wait for alert
function hlmWait(){
    setTimeout(function() {
        var value=Math.floor(Math.random() * 100);
        alert(value);
    }, 10000);
 }
 
 function forParentSubmit() {
	var ch1=document.getElementById("form_checked1");
    ch1.className="unchecked1";
	
	var ch2=document.getElementById("form_checked2");
    ch2.className="unchecked2";
	
	var ch3=document.getElementById("form_checked3");
    ch3.className="unchecked3";
 }

 function waitSubmit() {
     setTimeout(function () {
         // Здесь мы делаем определенный элемент видимым через его id
         var newElement = document.createElement("input");
         newElement.placeholder = "Wait input";
         newElement.className = "input1"
         newElement.id = "wait_new_element";
         var submit = document.getElementById("Wait_Submit");
         submit.parentNode.appendChild(newElement);
         initialised = true;
     }, 8000); // 8 seconds

 }


