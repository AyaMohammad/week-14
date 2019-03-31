var cnt = document.getElementById('container');
var body = document.getElementsByTagName('BODY')[0];
var Check = document.getElementById('check');
var wordbarUP = document.getElementById('antwoord');
var wordbarDOWN = document.getElementsByClassName('wordbarDOWN')[0];

for (i = 1; i <= 5; i++) {
    console.log("testFOR")
    var woord = document.createElement('BUTTON');
    woord.innerText = i;
    woord.id = "button" + i;
    cnt.appendChild(woord);
    woord.classList.add('button1');
    Check.onclick = clicked;
}

function clicked() {
    console.log("testCLICKED");
    var str = wordbarUP.value;
    var res = str.split("");

    for (var a = 0; a < res.length; a++) {
        var letter = res[a];
        var button = document.getElementById("button" + (a + 1));
        
        button.innerHTML = letter;
    }
}