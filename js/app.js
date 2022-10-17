//TERMÉKADATOK
const data ={
    "faanyagok":[
        {
            "id": 0,
            "nev": "ASD deszka",
            "keplink":"../media/img/faanyag/ebenfa-min.jpg",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD deszka",
            "keplink":"../media/img/faanyag/ebenfa-min.jpg",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD deszka",
            "keplink":"../media/img/faanyag/ebenfa-min.jpg",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD deszka",
            "keplink":"../media/img/faanyag/ebenfa-min.jpg",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD deszka",
            "keplink":"../media/img/faanyag/ebenfa-min.jpg",
            "ar": "4500 Ft"
        },
    ],

    "szerszamok":[
        {
            "id": 0,
            "nev": "ASD furó",
            "keplink":"../media/img/szerszamok/baltak-min.png",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD furó",
            "keplink":"../media/img/szerszamok/baltak-min.png",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD furó",
            "keplink":"../media/img/szerszamok/baltak-min.png",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD furó",
            "keplink":"../media/img/szerszamok/baltak-min.png",
            "ar": "4500 Ft"
        },
        {
            "id": 0,
            "nev": "ASD furó",
            "keplink":"../media/img/szerszamok/baltak-min.png",
            "ar": "4500 Ft"
        },
    ]
}
//TERMÉKADATOK MEGHÍVÁSA
var path = window.location.pathname;
var page = path.split("/").pop();
let adat;
switch (page) {
    case "faanyagok.html":
        adat = data.faanyagok;
        load();
        break;
        case "szerszamok.html":
        console.log("szerszamok");
        adat = data.szerszamok;
        load();
            break;
    default:
        break;
}

function load(){
    let container = document.getElementById("items");

    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("mb-5");
    adat.forEach(item => {
        let name = item.nev;
        let image = item.keplink;
        let price = item.ar;
                //kártya meghatározása
                let card =`
                <div class="card aru">
                  <img src="%IMG%" class="card-img-top" alt="image">
                  <div class="card-body">
                    <p class="card-title">%NAME%</p>
                    <p class="card-text">%PRICE%</p>
                  </div>
                </div>
                `;
        card = card.replace("%NAME%",name); //%NAME%" kicserélése a cardban name változóra
        card = card.replace("%IMG%",image); //%IMG%" kicserélése a cardban image változóra
        card = card.replace("%PRICE%",price); //%IMG%" kicserélése a cardban image változóra
        let asd = document.createElement("div");
        asd.classList.add("col-md-3");
        asd.innerHTML = card;
        row.append(asd)
        container.append(row);
    });
}





//FESTÉKEK
let szoveg=document.getElementById("szoveg")
let kep=document.getElementById("kep");
var x = document.getElementById("d1id");
function d1(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="1.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg"
}
function d2(){                                                                               
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="2.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d3(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="3.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d4(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="4.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d5(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="5.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d6(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="6.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d7(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="7.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d8(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="8.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function d9(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    kep.src="9.jpg";
    szoveg.innerHTML="igfuhuidrtfhbuyg2"
}
function bezar(){
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    kep.src="";
    szoveg.innerHTML=""
}