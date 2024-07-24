var date = new Date();

document.getElementById("currentYear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = "Last updated: " + document.lastModified;

const steps = [
  {
    name: "Getting to know the Cube",
    desciption: "The Cube has 3 distinct pieces. "+
    "<strong>Centers</strong> wich dont move. "+
    "<strong>Edges</strong> that have two colors. "+
    "<strong>Corners</strong> wich have 3 colors. "
  },
  {
    name: "Make the White Cross",
    desciption: "Look and find all <strong>edges</strong> that have white and any other color, " +
    "place them so that the sticker colors matches with the centers."
  },
  {
    name: "Solve the White Corners",
    desciption: "Look and find all the <strong>corners</strong> wich contains a white sticker and any other two colors, place them accordingly to the side of the white cross edges."
  },
  {
    name: "Congrats! You solved The First Layer",
    desciption: ""
  }
];

const container = document.getElementById("steps");

displaySteps();

function displaySteps() {
  steps.forEach(element => {
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let desciption = document.createElement("p");
    card.setAttribute("class", "container")
    desciption.setAttribute("class", "stepdescription");
    title.textContent = element.name;
    desciption.innerHTML = element.desciption;

    card.appendChild(title);
    card.appendChild(desciption);

    container.appendChild(card);
  });
};

let items = document.querySelectorAll(".container");

items.forEach(element => {
    if(element.offsetTop < 100) {
        element.classList.add("visible")
    };
});

window.addEventListener("scroll", e => {
    let scroll = document.documentElement.scrollTop;
    let items = document.querySelectorAll(".container")
    items.forEach (elem => {
        if(elem.offsetTop - window.innerHeight/1.5 < scroll){
            elem.classList.remove("hide")
            elem.classList.add("visible")
        }
        else {
            elem.classList.remove("visible")
            elem.classList.add("hide")
        };
    });
});
