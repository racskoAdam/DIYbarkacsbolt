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
