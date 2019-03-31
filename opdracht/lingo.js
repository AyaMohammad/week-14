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
    if (woordtotal == true) {                                                                   // als het woord geraden is word het gewonnen beeld getoont
        console.log("geraden");                                // en begint het spel opnieuw
        setTimeout(function () {                                                                //|  
            window.location.reload();                                                           //|
            // document.getElementsByClassName("zesletterlingo")[0].style.display = "";         //|
            // document.getElementsByClassName("container")[0].style.display = "none";          //|
        }, 5000);                                                                               //|

    }


}


//zes letter lingo:
// var zes_letter_lingo = document.getElementsByClassName("zesletter")[0];
// var zesletter = document.createElement("DIV");
// var zesletterwords = ["anders", "actief", "aanzet", "afloop", "altijd", "agenda", "afrond", "afzien", "achten", "alleen", "afdruk", "afhaal", "aziaat", "afvoer", "arnhem", "accuut", "acties", "aardig", "achter", "bladen", "bergen", "borgen", "bellen", "bepaal", "babbel", "banken", "bedden", "banden", "bowlen", "bollen", "bakker", "betaal", "belast", "bestek", "buizen", "buigen", "borden", "bonnen", "bouwen", "bestel", "bouten", "buiten", "binnen", "boeken", "bosjes", "bossen", "banaan", "bieden", "bieren", "boeren", "balken", "blouse", "belgie", "bussen", "bekend", "bureau", "beheer", "bleken", "bereid", "beekje", "burger", "boksen", "bakken", "botsen", "bedrag", "beslag", "bekken", "boenen", "braden", "bekers", "breder", "bluray", "ballon", "bezorg", "boiler", "bewust", "bedrog", "breken", "braken", "bewerk", "cactus", "camera", "creche", "claxon", "credit", "codeer", "cowboy", "cursus", "casino", "cheque", "chroom", "chrome", "cachet", "census", "chalet", "cabine", "crisis", "circus", "cellen", "closet", "denken", "derden", "dwazen", "dansen", "danser", "dieren", "dorpen", "deuren", "dromen", "dender", "douche", "dwalen", "donker", "dubbel", "dassen", "deksel", "delict", "draden", "design", "dragen", "dokter", "dumpen", "dingen", "direct", "dorpje", "dropje", "drente", "dating", "donder", "dollen", "draven", "daders", "dieven", "deugde", "degens", "doelen", "duimen", "dienen", "dadels", "dieper", "dynamo", "dooien", "dooier", "drogen", "droger", "duiken", "duiker", "duizen", "didact", "eerder", "eerste", "elders", "ergens", "etmaal", "eeuwen", "eigeel", "eieren", "eiland", "echter", "eikels", "effect", "elkaar", "examen", "eenden", "europa", "egypte", "figuur", "forens", "fiscus", "fouten", "flesje", "filmen", "filmer", "fusten", "fysiek", "folder", "gebouw", "graden", "geluid", "gassen", "gelden", "gitaar", "gevoel", "gretig", "grazen", "gieren", "geweld", "gewaad", "gralen", "gouden", "gulden", "glazen", "gokken", "groter", "gekste", "gekker", "geuren", "gratis", "gebied", "gewoon", "geiten", "gelach", "garage", "gehakt", "gewond", "gezond", "gracht", "google", "graten", "gulzig", "gelakt", "gummen", "gooien", "gereed", "geheim", "graven", "harden", "houden", "hangen", "huizen", "honden", "helden", "herten", "herfst", "hamers", "haakje", "hoogte", "hartje", "handig", "handen", "harder", "helder", "hartig", "herder", "heffen", "hemden", "helpen", "hobbel", "hoeken", "hotels", "hoekje", "haasje", "hanger", "heelal", "haring", "hendel", "handel", "heksen", "hierom", "heuvel", "hernia", "insect", "inzien", "iemand", "immers", "inkoop", "invoer", "idioot", "inzage", "ingave", "ingang", "ideaal", "impuls", "italie", "jatten", "jassen", "jegens", "jockey", "jongen", "jacket", "jargon", "jaguar", "jakamp", "jakkes", "jurken", "jampot", "japans", "jarige", "kokers", "kreten", "kompas", "kroket", "krekel", "katten", "kasten", "keuken", "koffie", "kachel", "kaders", "koffer", "karten", "kiezen", "keuren", "krokus", "kralen", "kroost", "knopen", "kernen", "lenzen", "lelijk", "lepels", "lekker", "liedje", "liever", "letter", "landen", "leraar", "lampen", "liften", "lokaal", "leasen", "liggen", "laatst", "messen", "moeten", "muziek", "mensen", "munten", "melden", "meiden", "moeren", "mantel", "moeder", "mannen", "minuut", "muizen", "merken", "mappen", "nadien", "nieuws", "normen", "neefje", "nimmer", "nummer", "nieten", "natuur", "nagels", "namens", "neuken", "naaste", "nieren", "niveau", "online", "oosten", "oranje", "orkest", "ontzag", "omlaag", "omhoog", "omkeer", "opties", "omvorm", "opgave", "opslag", "ontken", "opmaak", "poolen", "praten", "parken", "peuter", "pennen", "punten", "petten", "petjes", "pakken", "panden", "parfum", "pixels", "paraaf", "passie", "poppen", "quotum", "quizen", "quaker", "quasar", "quiche", "quidam", "quinto", "quitte", "quorum", "qwerty", "rennen", "randen", "rijden", "rechts", "rustig", "ronden", "redden", "rollen", "rellen", "rusten", "stalen", "stelen", "surfen", "spelen", "straat", "slagen", "spring", "sommen", "stoken", "studie", "steden", "stroom", "slapen", "slopen", "stroop", "spreid", "scheid", "scherm", "shirts", "shorts", "totaal", "tijden", "tellen", "teller", "tweede", "tiende", "tegels", "tablet", "treden", "truien", "tekens", "tenten", "tieren", "toeter", "tuniek", "utopia", "ultiem", "uithof", "uiting", "uitleg", "uitrit", "uitval", "uitwas", "uitweg", "unfair", "unicum", "update", "urbaan", "ureter", "urgent", "vallen", "vorken", "voegen", "verder", "vinden", "vierde", "vijfde", "verzin", "vriend", "volume", "vering", "vieren", "vossen", "vouwen", "vredig", "westen", "wassen", "winden", "wekker", "wikkel", "wereld", "wolken", "werden", "winkel", "wensen", "xanten", "xavier", "xyleen", "yuppie", "zelfde", "zoeken", "zingen", "zinnen", "zelden", "zitten", "zachte", "zeilen", "zonnen", "zenden", "zuiver", "zielig", "zorgen", "zanger", "zender"]
// var woordtotal_zes = "";

// var SIXWORDrandom = zesletterwords[Math.floor(Math.random() * zesletterwords.length)];
// var randomSIXWORDparts = SIXWORDrandom.split("");
// var checkkzesletter = document.getElementById('check');
// var zesletter1 = SIXWORDrandom.substring(0, 1);
// var zesletter2 = SIXWORDrandom.substring(1, 2);
// var zesletter3 = SIXWORDrandom.substring(2, 3);
// var zesletter4 = SIXWORDrandom.substring(3, 4);
// var zesletter5 = SIXWORDrandom.substring(4, 5);
// var zesletter6 = SIXWORDrandom.substring(5, 6);

// console.log('het zes letter woord is: ' + SIXWORDrandom);
// document.body.appendChild(zesletter);
// zesletter.classList.add('zesletterlingo');

// for (b = 1; b <= 6; b++) {
//     var zesletter_row = document.createElement("DIV");
//     zesletter_row.id = "zesletter-row" + b;
//     zesletter_row.classList.add("zesletter-row");
//     zesletter.appendChild(zesletter_row);

//     for (var i = 0; i < 6; i++) {
//         var letterBox = document.createElement("INPUT");
//         letterBox.classList.add("letter-Box");
//         zesletter_row.appendChild(letterBox);
//         letterBox.id = zesletter_row.id + "box" + i;
//         letterBox.setAttribute("maxlength", "1");
//     }
// }

// for (c = 1; c <= 5; c++) {
//     var button = document.createElement("button");
//     zesletter.appendChild(button);
//     button.id = "buttonzesletter" + c;
//     button.className = "knop_zesletterlingo" + c;
//     button.innerHTML = "CHECK!";
// }

// var button_zesletter1clicked = document.getElementById("buttonzesletter1");
// button_zesletter1clicked.onclick = check_zesletter_rij;

// var button_zesletter2clicked = document.getElementById("buttonzesletter2");
// button_zesletter2clicked.onclick = check_zesletter_rij;

// var button_zesletter3clicked = document.getElementById("buttonzesletter3");
// button_zesletter3clicked.onclick = check_zesletter_rij;

// var button_zesletter4clicked = document.getElementById("buttonzesletter4");
// button_zesletter4clicked.onclick = check_zesletter_rij;

// var button_zesletter5clicked = document.getElementById("buttonzesletter5");
// button_zesletter5clicked.onclick = check_zesletter_rij;

// document.getElementsByClassName("zesletterlingo")[0].style.display = "none";

// document.getElementById('zesletter-row1box0').readOnly = true;
// for (var zesletter_row = 2; zesletter_row < 7; zesletter_row++) {
//     for (var zesletter_box = 0; zesletter_box < 6; zesletter_box++) {
//         // console.log('zesletter-row' + zesletter_row + 'box' + zesletter_box);
//         document.getElementById('zesletter-row' + zesletter_row + 'box' + zesletter_box).readOnly = true;

//     }
// }
// document.getElementById('zesletter-row1box0').value = (zesletter1);
// document.getElementById('buttonzesletter1').style.display = "";
// document.getElementById('buttonzesletter2').style.display = "none";
// document.getElementById('buttonzesletter3').style.display = "none";
// document.getElementById('buttonzesletter4').style.display = "none";
// document.getElementById('buttonzesletter5').style.display = "none";

// function check_zesletter_rij() {
//     randomSIXWORDparts = randomWORD.split(""); //w,o,o,r,d
//     var rijnummer_zes = parseInt(this.id.replace("buttonzesletter", "")); // [button , 'cijfer']
//     document.getElementById('zesletter-row' + rijnummer_zes + 'box0').style.background = "darkgreen";

//     woordtotal_zes = true;
//     var tries_zes = [];                                                                     // maakt een kopie van het ingevulde woord 
//     for (var i = 0; i < 6; i++) {                                                       //|
//         tries_zes[i] = document.getElementById('zesletter-row' + rijnummer_zes + 'box' + i).value;        //|
//     }

//     // console.log(tries_zes);


//     for (var letter6check = 1; letter6check < 6; letter6check++) {                                      // maakt de inputs in de beginkleur (rood)
//         var letterSixToCheck = tries_zes[letter6check];                                                        //|
//         // console.log("GROEN - RAAD letter : " + letterToCheck);                                       //|
//         document.getElementById('zesletter-row' + rijnummer_zes + 'box' + letter6check).style.background = "red";     //|

//         if (randomSIXWORDparts[letter6check] == letterSixToCheck) { // als letter2 == gegevenletter 2                     // checkt of de letter in het woord 
//             document.getElementById('zesletter-row' + rijnummer_zes + 'box' + letter6check).style.background = "darkgreen";       // zit en op de goede plaats is dan 
//             randomSIXWORDparts[letter6check] = null;                                                                   // wordt de input groen en haalt
//             tries_zes[letter6check] = null;                                                                             // de letter uit het kopie van het
//         }                                                                                                           // woord en de kopie van het gegeven
//         // console.log('GROEN - Copy lingo woord: ' + letter6check + '  ' + randomWORDparts);                       // woord
//     }                                                                                                                  //|


//     for (var geel = 1; geel < 6; geel++) {                                                              // checkt of de letter in het woord zit maar op 
//         var letterSixToCheck = tries_zes[geel];                                                                // de verkeerde plaats is dan wordt de input 
//         var raadletter6 = document.getElementById('zesletter-row' + rijnummer_zes + 'box' + geel);                     // geel en een circel en haalt dan de de letter  
//         if (letterSixToCheck != null) {                                                                    // uit het kopie van het woord en de kopie van  
//             if (randomSIXWORDparts.indexOf(letterSixToCheck) > -1) {                                          // het gegeven woord
//                 // console.log("GEEL - RAAD letter : " + letterToCheck);                                //|
//                 // console.log(randomWORDparts.indexOf(raadletter.value));                              //|
//                 raadletter6.style.background = "yellow";                                                 //|
//                 raadletter6.style.borderRadius = "500px";                                                //|
//                 randomSIXWORDparts[randomSIXWORDparts.indexOf(letterSixToCheck)] = null;                         //|
//                 tries_zes[geel] = null;                                                                     //|                                                                    //|
//             }
//         }

//         // console.log('GEEL - Copy lingo woord: ' + letter6check + '  ' + randomSIXWORDparts);
//     }

//     if (rijnummer_zes < 5) {
//         // console.log('zesletter-row' + (rijnummer_zes + 1) + 'box' + (letter6check - 5));  
//         for (var i = 1; i < 5; i++) {
//             document.getElementById('row' + rijnummer_zes + 'box' + i).readOnly = true;
//             // console.log('row' + (rijnummer_zes + 1) + 'box' + i);
//             document.getElementById('zesletter-row' + (rijnummer_zes + 1) + 'box' + i).readOnly = false;
//         }

//         document.getElementById('buttonzesletter' + rijnummer_zes).style.display = "none";
//         document.getElementById('buttonzesletter' + (rijnummer_zes + 1)).style.display = "";
//         document.getElementById('buttonzesletter' + (rijnummer_zes + 1)).style.left = "650px";
//         document.getElementById('zesletter-row' + (rijnummer_zes + 1) + 'box0').value = (zesletter1);

//     } else {
//         document.getElementById('zesletter-row6box0').value = (zesletter1);
//         document.getElementById('zesletter-row6box1').value = (zesletter2);
//         document.getElementById('zesletter-row6box2').value = (zesletter3);
//         document.getElementById('zesletter-row6box3').value = (zesletter4);
//         document.getElementById('zesletter-row6box4').value = (zesletter5);
//         document.getElementById('zesletter-row6box5').value = (zesletter6);
//         document.getElementById('buttonzesletter' + rijnummer_zes).style.display = "none";
//         woordtotal_zes = false;
//     }

//     if (woordtotal_zes == true) {
//         setTimeout(function () {
//            // window.location.reload();
//         }, 5000);

//     }
   
// }



// document.getElementsByClassName("zesletterlingo")[0].style.display = "";
// document.getElementsByClassName("container")[0].style.display = "none";