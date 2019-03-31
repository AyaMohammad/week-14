
var container = document.getElementById('container');
var functionRoepen = document.getElementById('body');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');

container.appendChild(button1);
button1.innerHTML='Button 1';
button1.setAttribute('id', 'button1');
button1.onclick = button1Clicked;

function button1Clicked() {
  // var list = document.getElementById("button1");
  // list.removeChild();
  button1.style.display = "none";

  setTimeout(function(){
  	button1.style.display = "";
  	button1.innerHTML=("boe");
  }, 5000);
}

/*button 2*/
container.appendChild(button2);
button2.innerHTML = 'button 2';
button2.setAttribute('id' , 'button2');
button2.onclick = button2Clicked;

function button2Clicked() {
	functionRoepen.style.backgroundColor= "red";
}

/*button 3*/
container.appendChild(button3);
button3.innerHTML = 'button 3';
button3.setAttribute('id' , 'button3');
button3.onclick = button3Clicked;

function button3Clicked() {
	functionRoepen.style.backgroundColor = "blue";
}
