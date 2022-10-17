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
let szinek=document.getElementById("szinek");
var x = document.getElementById("d1id");
function d1(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#EC8020";
    szoveg.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptatem. Molestias temporibus nostrum aperiam corporis ipsum ab iste amet earum ea suscipit numquam repellat optio soluta totam reprehenderit, perferendis cupiditate!"
}
function d2(){                                                                               
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#2596BE";
    szoveg.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et ducimus a ea nesciunt placeat, doloribus perspiciatis in, iusto laboriosam consequatur tempora laborum labore eaque excepturi deserunt beatae, debitis recusandae."
}
function d3(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#76B5C5";
    szoveg.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium labore aperiam, nobis magnam nemo, voluptatum soluta animi voluptate quia possimus tempore fugiat quibusdam, incidunt cum minima eaque distinctio esse!"
}
function d4(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#C58676";
    szoveg.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis eos, dolores quidem unde molestias atque a quibusdam, laboriosam ex eveniet corporis nulla at deleniti eaque, ullam culpa voluptas. Vitae."
}
function d5(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#A7C576";
    szoveg.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi iure amet dolor distinctio repellendus non in minima, eum sunt cumque ex nobis ut ea perspiciatis nemo labore, quos aspernatur!"
}
function d6(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#E83A3A";
    szoveg.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis rem cupiditate incidunt doloribus quod dolores non quidem nam dolor eaque molestiae vel voluptatibus aperiam unde hic, modi labore officia!"
}
function d7(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#E6EC23";
    szoveg.innerHTML="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nemo et. Reiciendis vitae sed a ducimus distinctio sunt necessitatibus eligendi? Quis neque modi voluptatem totam quae voluptas cum cumque doloremque!"
}
function d8(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#0B10CE";
    szoveg.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem debitis, consequuntur magni delectus, doloremque ducimus repudiandae aut, nostrum rem dolorem natus ut id voluptatibus? Ducimus error unde officiis! Vitae, iure."
}
function d9(){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    szinek.style.backgroundColor="#360158";
    szoveg.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ab nulla, possimus sint quisquam alias doloremque fugit rerum sed nobis, odio illo repellat, excepturi delectus! Necessitatibus atque nobis sint optio."
}
function bezar(){
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



//NYITVATARTAS
let am=new Date();
let nyitvatartasora=am.getHours();
let nyitvatartasperc=am.getMinutes();
let nyitvatartasnap=am.getDay();
let xdhaha=document.getElementById("nyitvatartas");
if(nyitvatartasnap==6&&nyitvatartasora>8&&nyitvatartasora<20)
{document.getElementById("nyitvatartas").innerHTML="Nyitva";xdhaha.classList.add("nyitva");}
else if(nyitvatartasnap>=1&&nyitvatartasnap<=5&&nyitvatartasora==7&&nyitvatartasperc>=30)
{document.getElementById("nyitvatartas").innerHTML="Nyitva";xdhaha.classList.add("nyitva");}
else if(nyitvatartasnap>=1&&nyitvatartasnap<=5&&nyitvatartasora>7&&nyitvatartasora<20)
{document.getElementById("nyitvatartas").innerHTML="Nyitva";xdhaha.classList.add("nyitva");}
else if(nyitvatartasnap>=1&&nyitvatartasnap<=5&&nyitvatartasora==20&&nyitvatartasora<=30)
{document.getElementById("nyitvatartas").innerHTML="Nyitva";xdhaha.classList.add("nyitva");}
else{document.getElementById("nyitvatartas").innerHTML="Zárva";xdhaha.classList.add("zarva");}