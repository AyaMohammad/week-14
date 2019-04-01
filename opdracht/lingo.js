var words = [
    "appel", "aldus", "afwas", "aftel", "aarde", "armen", "actie", "apart", "adres", "avond", "aders", "alarm",
    "boten", "balen", "beter", "bomen", "boren", "boven", "boxen", "brood", "broek", "brand", "breed", "benen", "beeld", "brief", "beten", "basis", "blauw", "beren", "buren", "banen",
    "bloed", "broer", "blond", "boter", "beleg", "breng", "baken", "beker", "blind", "bezig", "baden", "bedel", "bazen", "bazin", "baren", "beden", "beken", "bezem", "baard", "bidet", "breuk",
    "conus", "cello", "creme", "cloud", "cacao", "cadet", "cavia", "ceder", "combi", "china", "clown",
    "draai", "deden", "dalen", "derde", "delen", "dwaas", "daden", "dader", "dames", "diner", "datum", "dozen", "dreun", "duits", "dagen", "deren", "dwerg", "dwaal", "dwing", "druil",
    "droog", "draad", "dweil", "drank", "duren", "dwars", "drugs", "daten", "daler", "doorn", "disco", "degen", "droom", "dient", "drone", "dadel", "duwen", "druif", "deken", "deler",
    "elven", "eigen", "enger", "engel", "elder", "enkel", "effen", "email", "egaal",
    "fiets", "friet", "files", "forel", "films", "feest", "fruit", "falen", "flora", "fauna", "feeen", "freak", "forum", "fusie",
    "geven", "gaven", "groen", "graai", "getal", "grens", "grond", "groef", "graal", "gewei", "games", "grote", "groet", "garen", "gebak", "graag", "genre", "glans", "geluk", "geeuw",
    "horen", "heren", "halen", "hagel", "haren", "helen", "harde", "hemel", "hoofd", "huren", "hamer", "haken", "heden", "hotel", "hobby", "heler", "hoger",
    "ieder", "index", "immer", "icoon", "inlog", "inzet", "innig",
    "jovel", "jaren", "jicht", "jabot", "jacht", "jaden", "jagen", "jager", "japon", "jarig", "jawel", "jeans", "jemig", "jeugd", "joint", "jonas", "joule",
    "koken", "kreet", "koker", "kerst", "kegel", "koude", "kader", "krent", "kamer", "kaars", "kaart", "kraan", "krant", "keren", "kruid", "kerel", "kubus", "kraal", "kleur", "kroon",
    "klein", "korst", "klopt", "kabel", "kunst", "kopje", "krans", "klimt", "kater", "klink", "kudde", "kruis",
    "lopen", "laten", "lepel", "links", "laden", "leven", "lezen", "lucht", "lenen", "laser", "lente", "licht", "lader", "leder", "lunch", "lijst", "leger", "leden", "legen", "lagen",
    "lezer", "lever", "lingo", "loper", "luier", "lager", "leeuw",
    "maand", "malen", "maken", "media", "meter", "motor", "maten", "markt", "mazen", "molen", "meest", "meren", "model", "meden", "maden", "macht", "meeuw", "mager", "magen", "maren", "manen",
    "noord", "nieuw", "negen", "namen", "neven", "nodig", "naden", "neder", "nemen",
    "onder", "optel", "ovaal", "ovale", "onwel", "optie", "orden", "oppas", "ouder", "ophef", "oases",
    "palen", "plein", "pegel", "paars", "prijs", "piano", "pixel", "paden", "pasta", "pizza", "poten", "paard", "puber", "pauze", "preek", "polis", "pater", "proef", "panda", "penis",
    "prins", "pluto", "polen", "plint",
    "quota", "quant", "quark", "queue", "quilt", "quote",
    "robot", "reken", "raden", "regen", "radio", "rente", "regio", "rugby", "reden", "roken", "ruzie", "ruist", "regel", "racen", "races", "riool", "ramen", "radar", "roman", "rokje",
    "razen", "roede",
    "staan", "staal", "speel", "steeg", "stoel", "stook", "steek", "schep", "spijs", "stoep", "shirt", "samen", "sites", "sport", "spalk", "sjaal", "storm", "staat", "steun", "strak",
    "serie", "shows", "schat", "snoep", "sfeer", "smeer", "speer", "scene", "speld", "smeed", "smaak", "super", "stand", "steer", "smelt", "sedan", "skier", "sluis", "sneer", "steel",
    "truck", "terug", "typen", "talen", "taboe", "tegel", "taart", "tafel", "trouw", "teken", "teren", "taken", "treur", "tenen", "titel", "thuis", "tiara", "teder", "toets", "tabak",
    "trein", "tarwe", "telen", "teler", "uiten", "uilig",
    "uitje", "uiver", "ultra", "uniek", "uppie", "uraan", "uiers",
    "velen", "vloer", "video", "varen", "vegen", "veren", "vader", "vaten", "vuren", "vrouw", "vlees", "vogel", "vroeg", "vezel", "veins", "vorst", "veder", "vanaf", "vieze", "veger",
    "villa", "veler", "vrede", "vries",
    "woord", "wagen", "wonen", "waren", "warme", "weten", "water", "weren", "wazig", "wegen", "weven", "wezen", "weken", "wraak", "wilde", "wreed", "wrede", "wenst", "woest",
    "xenon",
    "yacht", "yucca",
    "zwaar", "zware", "zesde", "zagen", "zalig", "zomer", "zeden", "zwart", "zeven", "zicht", "zadel", "zweet", "zenuw", "zweer", "zweef", "zaden", "zaken", "zeker", "zever", "zeeen"
];

var denk = document.getElementsByClassName("denk")[0];
var LINGO = document.getElementsByClassName("container")[0];
var container = document.createElement("DIV");
var woordtotal = "";

var randomWORD = words[Math.floor(Math.random() * words.length)];
var randomWORDparts = randomWORD.split(""); // [w,o,o,r,d]
var letter1 = randomWORD.substring(0, 1);
var letter2 = randomWORD.substring(1, 2);
var letter3 = randomWORD.substring(2, 3);
var letter4 = randomWORD.substring(3, 4);
var letter5 = randomWORD.substring(4, 5);

var checkk = document.getElementById('check');

document.body.appendChild(container);       //----------- maakt een container aan
container.classList.add('container');       //|

for (b = 1; b <= 6; b++) {
    var row = document.createElement("DIV");  //----------- maakt div's aan
    row.id = "row" + b;                       //|
    row.classList.add("row");                 //|
    container.appendChild(row);               //|

    for (var i = 0; i < 5; i++) {
        var miniBox = document.createElement("INPUT");      //----------- maakt de inputs aan
        miniBox.classList.add("miniBox");                   //|
        row.appendChild(miniBox);                           //|
        miniBox.id = row.id + "box" + i;                    //|
        miniBox.setAttribute("maxlength", "1");             //|
    }
}

for (c = 1; c <= 5; c++) {
    var button = document.createElement("button");      //------------------- maakt de buttons aan
    container.appendChild(button);                      //|
    button.id = "button" + c;                           //|
    button.className = "knop" + c;                      //|
    button.innerHTML = "CHECK!";                        //|
}
var button1clicked = document.getElementById("button1");
button1clicked.onclick = check_rij;

var button2clicked = document.getElementById("button2");
button2clicked.onclick = check_rij;

var button3clicked = document.getElementById("button3");
button3clicked.onclick = check_rij;

var button4clicked = document.getElementById("button4");
button4clicked.onclick = check_rij;

var button5clicked = document.getElementById("button5");
button5clicked.onclick = check_rij;

document.getElementsByClassName("denk")[0].innerText = ("Typ in wat je denkt");
document.getElementsByClassName('raad')[0].innerText = ("Het woord is " + randomWORD);
document.getElementsByClassName('raad')[0].style.display = "none";
console.log('het woord is: ' + randomWORD);

document.getElementById('row1box0').readOnly = true;                                //------------------- maakt de inputs readonly (allen leesbaar)
for (var row = 2; row < 7; row++) {                                                 //|
    for (var box = 0; box < 5; box++) {                                             //|
        document.getElementById('row' + row + 'box' + box).readOnly = true;         //|
        // console.log('row' + row + 'box' + box);                                  //|
    }
}
document.getElementById('row1box0').value = (randomWORDparts[0]);
document.getElementById('button1').disabled = false;
document.getElementById('button2').style.display = "none";
document.getElementById('button3').style.display = "none";
document.getElementById('button4').style.display = "none";
document.getElementById('button5').style.display = "none";

function check_rij() {
    randomWORDparts = randomWORD.split(""); //w,o,o,r,d
    var rijnummer = parseInt(this.id.replace("button", "")); // [button , 'cijfer']
    document.getElementById('row' + rijnummer + 'box0').style.background = "darkgreen";

    
    var tries = [];                                                                     // maakt een kopie van het ingevulde woord 
    for (var i = 0; i < 5; i++) {                                                       //|
        tries[i] = document.getElementById('row' + rijnummer + 'box' + i).value;        //|
    }
    var gok = tries.join('');

    // console.log(tries);


    for (var letter5check = 1; letter5check < 5; letter5check++) {                                      // maakt de inputs in de beginkleur (rood)
        var letterToCheck = tries[letter5check];                                                        //|
        // console.log("GROEN - RAAD letter : " + letterToCheck);                                       //|
        document.getElementById('row' + rijnummer + 'box' + letter5check).style.background = "red";     //|

        if (randomWORDparts[letter5check] == letterToCheck) { // als letter2 == gegevenletter 2                     // checkt of de letter in het woord 
            document.getElementById('row' + rijnummer + 'box' + letter5check).style.background = "darkgreen";       // zit en op de goede plaats is dan 
            randomWORDparts[letter5check] = null;                                                                   // wordt de input groen en haalt
            tries[letter5check] = null;                                                                             // de letter uit het kopie van het
        }                                                                                                           // woord en de kopie van het gegeven
        // console.log('GROEN - Copy lingo woord: ' + letter5check + '  ' + randomWORDparts);                       // woord
    }                                                                                                               //|


    for (var geel = 1; geel < 5; geel++) {                                                              // checkt of de letter in het woord zit maar op 
        var letterToCheck = tries[geel];                                                                // de verkeerde plaats is dan wordt de input 
        var raadletter = document.getElementById('row' + rijnummer + 'box' + geel);                     // geel en een circel en haalt dan de de letter  
        if (letterToCheck != null) {                                                                    // uit het kopie van het woord en de kopie van  
            if (randomWORDparts.indexOf(letterToCheck) > -1) {                                          // het gegeven woord
                // console.log("GEEL - RAAD letter : " + letterToCheck);                                //|
                // console.log(randomWORDparts.indexOf(raadletter.value));                              //|
                raadletter.style.background = "yellow";                                                 //|
                raadletter.style.borderRadius = "500px";                                                //|
                randomWORDparts[randomWORDparts.indexOf(letterToCheck)] = null;                         //|
                tries[geel] = null;                                                                     //|                                                                    //|
            }
        }

        // console.log('GEEL - Copy lingo woord: ' + letter5check + '  ' + randomWORDparts);
    }
    console.log(randomWORD);
        console.log(gok);

     if (randomWORD == gok) {                                                                   // als het woord geraden is word het gewonnen beeld getoont
        console.log("geraden");                                // en begint het spel opnieuw
        alert("Gefeliciteerd je hebt het woord geraden.");
        setTimeout(function () {                                                                //|  
            window.location.reload();                                                           //|
            // document.getElementsByClassName("zesletterlingo")[0].style.display = "";         //|
            // document.getElementsByClassName("container")[0].style.display = "none";          //|
        }, 5000);                                                                               //|

    }else{

    // console.log('row' + (rijnummer + 1) + 'box' + letter2check)
    if (rijnummer < 5) {                                                                        // maak de gebruikte rij alleen leesbaar
        // console.log('row' + (rijnummer + 1) + 'box' + (letter5check - 5));                      // en maakt de volgende rij invulbaar
        for (var i = 1; i < 5; i++) {                                                           //|
            document.getElementById('row' + rijnummer + 'box' + i).readOnly = true;             //|
            document.getElementById('row' + (rijnummer + 1) + 'box' + i).readOnly = false;      //|
        }                                                                                       //|

        document.getElementById('button' + rijnummer).style.display = "none";                   // maakt bij de volgende rij de button zichtbaar
        document.getElementById('button' + (rijnummer + 1)).style.display = "";                 // en geeft de eerste letter
        document.getElementById('button' + (rijnummer + 1)).style.left = "545px";               //|
        document.getElementById('row' + (rijnummer + 1) + 'box0').value = (letter1);            //|
        
    } else {
        document.getElementById('row6box0').value = (letter1);                                  // na 5 pogingen wordt het antwoord getoond
        document.getElementById('row6box1').value = (letter2);                                  // en begint het spel opnieuw
        document.getElementById('row6box2').value = (letter3);                                  //|
        document.getElementById('row6box3').value = (letter4);                                  //|
        document.getElementById('row6box4').value = (letter5);                                  //|
        document.getElementById('button' + rijnummer).style.display = "none";                   //|
        woordtotal = true;                                                                     //|
    }
   
}

}